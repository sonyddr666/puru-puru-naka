import * as THREE from 'three';
import { clamp } from '../core/math.js';

/**
 * Dragging, pinching and throwing.
 *
 * A grab pins a patch of vertices to a plane parallel to the camera; the
 * rest of the body follows through a spring, which is what makes it feel
 * like jelly instead of a rigid handle. On release the recent pointer
 * history is used to compute a throw velocity.
 */
export function createGrab(world, geometry, deps) {
  const { body, grab, bounds } = world;
  const { HALFW } = geometry;
  const { raycast, camera, canvas, slime, sfx, touch, hearts, onCount, physics } = deps;

  const tmpV = new THREE.Vector3();
  const tmpV2 = new THREE.Vector3();
  let confirmed = false;

  function confirm(now) {
    if (confirmed || !deps.onGrab) return;
    const moved = Math.hypot(raycast.pointer.x - grab.downX, raycast.pointer.y - grab.downY);
    if (moved < 7 && now - grab.downT < 0.35) return;
    confirmed = true;
    deps.onGrab();
  }

  /** Starts a grab at the given intersection. */
  function begin(hit, pointerId, now) {
    const g = raycast.hitVertex(hit);
    confirmed = false;
    grab.on = true; grab.g = g; grab.id = pointerId;
    grab.downX = raycast.pointer.x; grab.downY = raycast.pointer.y; grab.downT = now;
    grab.maxStretch = 0; grab.stretch = 0;
    camera.getWorldDirection(tmpV2);
    grab.plane.setFromNormalAndCoplanarPoint(tmpV2, hit.point);
    grab.offset.set(hit.point.x - body.x, hit.point.y - body.y, hit.point.z - body.z);
    grab.cursor.copy(hit.point);
    grab.target.set(body.x, body.y, body.z);
    grab.desired.set(geometry.disp[g * 3], geometry.disp[g * 3 + 1], geometry.disp[g * 3 + 2]);
    grab.samples = [{ t: now, x: hit.point.x, y: hit.point.y, z: hit.point.z }];
    geometry.gw.fill(0);
    const L = [], W = [];
    physics.forEachNear(g, 0.42, (i, w) => {
      if (w > 0.02) { L.push(i); W.push(w); geometry.gw[i] = w; }
    });
    grab.list = Uint32Array.from(L);
    grab.weights = Float32Array.from(W);
    canvas.style.cursor = 'grabbing';
  }

  /** Follows the pointer; called every frame while grabbing. */
  function update(now) {
    confirm(now);
    raycast.ray.setFromCamera(raycast.ndc, camera);
    const p = raycast.ray.ray.intersectPlane(grab.plane, tmpV);
    if (!p) return;
    grab.cursor.copy(p);
    grab.samples.push({ t: now, x: p.x, y: p.y, z: p.z });
    if (grab.samples.length > 24) grab.samples.shift();

    // where the body wants to be: under your finger; pulling below the
    // counter brings it toward you
    let tx = p.x - grab.offset.x, ty = p.y - grab.offset.y, tz = p.z - grab.offset.z;
    if (ty < 0) { tz += -ty * 1.25; ty = 0; }
    grab.target.set(
      clamp(tx, bounds.xL + HALFW, bounds.xR - HALFW),
      clamp(ty, 0, bounds.yMax),
      clamp(tz, bounds.zMin, bounds.zMax));

    // the grabbed patch sticks to the finger
    const local = slime.worldToLocal(tmpV2.copy(p));
    const g = grab.g, s1 = 1 + world.sq, is = 1 / Math.sqrt(s1);
    const { rest, restSqY } = geometry;
    const rx = local.x - rest[g * 3] * is;
    const ry = local.y - restSqY(g, s1);
    const rz = local.z - rest[g * 3 + 2] * is;
    const len = Math.hypot(rx, ry, rz);
    if (len > 5.2) { release('slip'); return; }

    // tanh soft limit: lets you stretch it without ever tearing it apart
    const MAX = 2.3, soft = MAX * Math.tanh(len / MAX), k = len > 1e-6 ? soft / len : 0;
    grab.desired.set(rx * k, ry * k, rz * k);

    // never let the pinched patch be pushed through the body (it would fold inside out)
    const nx = geometry.unit[g * 3], ny = geometry.unit[g * 3 + 1], nz = geometry.unit[g * 3 + 2];
    const dn = grab.desired.x * nx + grab.desired.y * ny + grab.desired.z * nz;
    if (dn < -0.3) {
      const c = dn + 0.3;
      grab.desired.x -= nx * c;
      grab.desired.y -= ny * c;
      grab.desired.z -= nz * c;
    }
    grab.stretch = soft;
    grab.maxStretch = Math.max(grab.maxStretch, soft);
  }

  /** Ends the grab. `mode` is 'up', 'cancel' or 'slip'. */
  function release(mode = 'up') {
    if (!grab.on) return;
    const now = performance.now() / 1000;
    if (mode === 'up') confirm(now);
    grab.on = false;
    if (confirmed) deps.onRelease?.();
    geometry.gw.fill(0);
    try { canvas.releasePointerCapture(grab.id); } catch (_) { /* already gone */ }
    canvas.style.cursor = raycast.pointer.over ? 'grab' : '';

    if (mode === 'cancel') return;

    const moved = Math.hypot(raycast.pointer.x - grab.downX, raycast.pointer.y - grab.downY);
    if (mode === 'up' && moved < 7 && now - grab.downT < 0.35) {
      // it was a tap, not a drag: poke it instead
      physics.poke(grab.g);
      deps.ex.squeezeUntil = now + 0.3;
      deps.ex.happyUntil = now + 1.5;
      hearts(raycast.pointer.x, raycast.pointer.y, 2);
      sfx.poke();
      onCount();
      deps.onPoke?.(now);
      return;
    }

    // throw: use how the finger was moving just before letting go
    const S = grab.samples, last = S[S.length - 1];
    let vx = 0, vy = 0, vz = 0;
    if (last && now - last.t < 0.12) {
      let old = S[0];
      for (let i = S.length - 1; i >= 0; i--) {
        if (last.t - S[i].t >= 0.07) { old = S[i]; break; }
      }
      const dt = Math.max(last.t - old.t, 1 / 60);
      vx = (last.x - old.x) / dt;
      vy = (last.y - old.y) / dt;
      vz = (last.z - old.z) / dt;
    }
    const sp = Math.hypot(vx, vy, vz), cap = 16;
    if (sp > cap) { vx *= cap / sp; vy *= cap / sp; vz *= cap / sp; }
    body.vx = body.vx * 0.3 + vx * 0.95;
    body.vy = body.vy * 0.3 + vy * 0.95;
    body.vz = body.vz * 0.3 + vz * 0.95;
    if (body.vy < 0 && body.y <= 0.02) body.vy = 0;
    body.air = body.y > 0.02 || body.vy > 0.3;
    world.sqv += 1.4 * grab.maxStretch;

    if (sp > 4 || grab.maxStretch > 0.6 || mode === 'slip') {
      deps.ex.squeezeUntil = now + 0.22;
      deps.ex.happyUntil = now + 1.4;
      sfx.boing(Math.min(1, Math.max(sp / 14, grab.maxStretch / 2)));
      onCount();
    }
  }

  return { begin, update, release };
}
