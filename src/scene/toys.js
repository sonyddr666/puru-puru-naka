import * as THREE from 'three';
import { clamp } from '../core/math.js';
import { reduceMotion } from '../core/media.js';
import { TOYS } from '../data/playground.js';

/** A bounded toy set, with real picking, dragging and contact with either slime. */
export function createToys({ scene, camera, canvas, floor, store, counter, sfx, getActors, getActive, mug, canInteract = () => true }) {
  let kind = 'none', objects = [], drag = null;
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), point = new THREE.Vector3();
  const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -floor - 0.3);
  const bounceTimes = new WeakMap();
  function cancelDrag() {
    if (drag) { try { canvas.releasePointerCapture(drag.id); } catch {} drag = null; }
    canvas.style.cursor = '';
  }
  function disposeObjects() {
    cancelDrag();
    const materials = new Set();
    for (const object of objects) { scene.remove(object); object.geometry.dispose(); materials.add(object.material); }
    for (const material of materials) { material.map?.dispose(); material.dispose(); }
    objects = [];
  }
  function add(geometry, material, position) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(position); mesh.userData.vx = mesh.userData.vz = 0;
    objects.push(mesh); scene.add(mesh); return mesh;
  }
  function moreBubbles() {
    if (kind !== 'bubbles') return;
    disposeObjects();
    const material = new THREE.MeshPhysicalMaterial({ color: '#EDF7F4', roughness: 0.08, metalness: 0,
      transmission: 0.55, thickness: 0.08, iridescence: 0.65, transparent: true, opacity: 0.75, depthWrite: false });
    const bounds = getActive().world.bounds;
    const width = Math.min(3.4, (bounds.xR - bounds.xL) * 0.7);
    for (let i = 0; i < 8; i++) {
      const radius = 0.14 + Math.random() * 0.11;
      const mesh = add(new THREE.SphereGeometry(radius, 16, 12), material,
        new THREE.Vector3((i / 7 - 0.5) * width, floor + 1 + (i % 3) * 0.6, -0.4 + (i % 2) * 0.7));
      Object.assign(mesh.userData, { radius, baseY: mesh.position.y, phase: Math.random() * 6, born: performance.now() / 1000 });
    }
  }
  function setKind(id) {
    if (!TOYS.some(item => item.id === id)) return;
    disposeObjects(); kind = id;
    const actor = getActive(), bounds = actor.world.bounds;
    const x = clamp(actor.world.body.x + 1.7, bounds.xL + 0.6, bounds.xR - 0.6);
    if (id === 'bubbles') moreBubbles();
    else if (id === 'sponge') {
      const textureCanvas = document.createElement('canvas'); textureCanvas.width = textureCanvas.height = 128;
      const g = textureCanvas.getContext('2d'); g.fillStyle = '#DCC48C'; g.fillRect(0, 0, 128, 128);
      g.fillStyle = '#B9A66E';
      for (let i = 0; i < 75; i++) { g.beginPath(); g.arc((i * 37) % 128, (i * 61) % 128, 1 + i % 3, 0, Math.PI * 2); g.fill(); }
      const texture = new THREE.CanvasTexture(textureCanvas); texture.colorSpace = THREE.SRGBColorSpace;
      const mesh = add(new THREE.SphereGeometry(0.68, 24, 16), new THREE.MeshStandardMaterial({ map: texture, roughness: 0.9 }),
        new THREE.Vector3(x, floor + 0.16, actor.world.body.z + 0.4));
      mesh.scale.set(1, 0.25, 0.72);
    } else if (id === 'ice') {
      const mesh = add(new THREE.BoxGeometry(0.65, 0.6, 0.65),
        new THREE.MeshPhysicalMaterial({ color: '#D2E8EA', transmission: 0.75, thickness: 0.7, roughness: 0.15, ior: 1.31, clearcoat: 1 }),
        new THREE.Vector3(x, floor + 0.3, actor.world.body.z + 0.55));
      mesh.rotation.y = 0.3;
    }
    store.update({ toy: id });
  }
  function setRay(event) {
    const r = canvas.getBoundingClientRect();
    ndc.set((event.clientX - r.left) / r.width * 2 - 1, -(event.clientY - r.top) / r.height * 2 + 1);
    ray.setFromCamera(ndc, camera);
  }
  function pop(object, actor = getActive(), userAction = false) {
    if (!object.visible) return;
    object.visible = false;
    actor.expression.feel('happy', 0.7); actor.world.sqv += 0.5;
    if (userAction) counter.bump();
    sfx.poke();
  }
  function onDown(event) {
    if (drag || !canInteract() || (kind === 'none' && !mug?.available) || getActive().expression.ex.pose ||
        getActive().world.grab.on || (event.pointerType === 'mouse' && event.button !== 0)) return;
    setRay(event);
    const toyHit = ray.intersectObjects(objects.filter(object => object.visible), false)[0];
    const mugHit = mug?.available ? ray.intersectObject(mug.mesh, true)[0] : null;
    const pickedMug = Boolean(mugHit && (!toyHit || mugHit.distance < toyHit.distance));
    const hit = pickedMug ? mugHit : toyHit;
    const slimeHit = ray.intersectObjects(getActors().map(actor => actor.mesh), false)[0];
    if (!hit || (slimeHit && slimeHit.distance < hit.distance)) return;
    event.stopImmediatePropagation(); sfx.unlock(); getActive().expression.touch(performance.now() / 1000, { wakeHop: false });
    if (!pickedMug && kind === 'bubbles') { pop(hit.object, getActive(), true); return; }
    drag = { id: event.pointerId, object: pickedMug ? mug.mesh : hit.object,
      mug: pickedMug, x: event.clientX, y: event.clientY, moved: false };
    try { canvas.setPointerCapture(event.pointerId); } catch {}
    canvas.style.cursor = 'grabbing';
  }
  function onMove(event) {
    if (!drag || drag.id !== event.pointerId) return;
    event.stopImmediatePropagation(); setRay(event);
    const hit = ray.ray.intersectPlane(plane, point);
    if (!hit) return;
    const bounds = getActive().world.bounds;
    drag.moved ||= Math.hypot(event.clientX - drag.x, event.clientY - drag.y) > 6;
    if (drag.mug) {
      if (drag.moved && mug.available) mug.move(hit.x, hit.z, bounds);
      return;
    }
    const margin = kind === 'sponge' ? 0.72 : 0.5;
    drag.object.position.x = clamp(hit.x, bounds.xL + margin, bounds.xR - margin);
    drag.object.position.z = clamp(hit.z, bounds.zMin + 0.2, bounds.zMax - 0.2);
  }
  function onEnd(event) {
    if (!drag || drag.id !== event.pointerId) return;
    event.stopImmediatePropagation();
    if (drag.mug && !drag.moved && event.type === 'pointerup') mug.start(getActors()[0]);
    if (!drag.mug && kind === 'sponge' && !drag.moved && event.type !== 'pointercancel') {
      const actor = getActive(), body = actor.world.body;
      const dx = drag.object.position.x - body.x, dz = drag.object.position.z - body.z;
      actor.expression.touch(performance.now() / 1000, { wakeHop: false });
      if (actor.physics.hop(reduceMotion ? 3 : 6.2, clamp(dx * 1.7, -5, 5), clamp(dz * 1.7, -5, 5))) {
        counter.bump(); sfx.jump(); actor.expression.feel('happy', 1.3);
      }
    }
    try { canvas.releasePointerCapture(event.pointerId); } catch {}
    drag = null; canvas.style.cursor = '';
  }
  canvas.addEventListener('pointerdown', onDown);
  canvas.addEventListener('pointermove', onMove);
  canvas.addEventListener('pointerup', onEnd); canvas.addEventListener('pointercancel', onEnd);

  function update(dt, now) {
    for (const object of objects) {
      if (!object.visible) continue;
      if (kind === 'bubbles') {
        object.position.y = object.userData.baseY + (reduceMotion ? 0 : Math.sin(now * 0.8 + object.userData.phase) * 0.22);
      }
      for (const actor of getActors()) {
        if (actor.expression.ex.pose) continue;
        const body = actor.world.body, dx = object.position.x - body.x, dz = object.position.z - body.z;
        const distance = Math.hypot(dx, dz);
        if (kind === 'bubbles') {
          const centerY = body.y + (actor.geometry.FLOOR + actor.geometry.TOP) / 2;
          if (Math.hypot(dx, dz, object.position.y - centerY) < actor.geometry.HALFW * 0.7 + object.userData.radius) pop(object, actor);
        } else if (kind === 'sponge') {
          if (distance < actor.geometry.HALFW * 0.45 + 0.5 && body.air && body.vy < -0.5 && body.y < 0.32 && now - (bounceTimes.get(actor) ?? 0) > 0.8) {
            body.y = 0.25; body.vy = reduceMotion ? 2 : 5.2; actor.world.sqv -= 1.4;
            bounceTimes.set(actor, now); actor.expression.feel('happy', 0.8); sfx.boing(0.25);
          }
        } else if (distance < actor.geometry.HALFW * 0.8 + 0.34 && body.y < 0.8) {
          const nx = distance > 0.001 ? dx / distance : 1, nz = distance > 0.001 ? dz / distance : 0;
          if (drag?.object === object) actor.physics.push(-nx * dt * 3, -nz * dt * 3, 4);
          else {
            object.position.x += nx * dt * 2; object.position.z += nz * dt * 2;
            object.rotation.y += dt * 0.6;
          }
          actor.expression.ex.surpriseUntil = now + 0.2;
        }
      }
      const bounds = getActive().world.bounds;
      const margin = kind === 'sponge' ? 0.72 : kind === 'ice' ? 0.5 : object.userData.radius;
      object.position.x = clamp(object.position.x, bounds.xL + margin, bounds.xR - margin);
      object.position.z = clamp(object.position.z, bounds.zMin + 0.2, bounds.zMax - 0.2);
    }
  }
  return { setKind, moreBubbles, update, cancelDrag, get kind() { return kind; }, get objects() { return objects; },
    get mugDragged() { return drag?.mug === true; },
    dispose() { disposeObjects(); canvas.removeEventListener('pointerdown', onDown); canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerup', onEnd); canvas.removeEventListener('pointercancel', onEnd); } };
}
