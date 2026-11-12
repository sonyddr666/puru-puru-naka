import * as THREE from 'three';
import { clamp } from '../core/math.js';
import { reduceMotion } from '../core/media.js';
import { FIRE_MUG_ACTIONS } from '../data/playground.js';

/** A ceramic mug with a movable resting position and a drink animation. */
export function createFireMug(room, floor) {
  const mesh = new THREE.Group();
  const ceramic = new THREE.MeshStandardMaterial({ color: 0xf5ddb0, roughness: 0.31 });
  const coffee = new THREE.MeshStandardMaterial({ color: 0x371b12, roughness: 0.5 });
  const profile = [[0, 0], [.24, 0], [.29, .035], [.33, .13], [.37, .61],
    [.36, .65], [.32, .65], [.31, .61], [.27, .13], [.23, .075], [0, .075]];
  const body = new THREE.Mesh(new THREE.LatheGeometry(profile.map(([x, y]) => new THREE.Vector2(x, y)), 32), ceramic);
  const handle = new THREE.Mesh(new THREE.TorusGeometry(.18, .052, 10, 24), ceramic);
  handle.position.set(.37, .33, 0);
  handle.scale.x = .85;
  const liquid = new THREE.Mesh(new THREE.CircleGeometry(.318, 32), coffee);
  liquid.rotation.x = -Math.PI / 2;
  liquid.position.y = .59;
  mesh.add(body, handle, liquid);
  room.add(mesh);

  const rest = new THREE.Vector3(-1.95, floor + .006, -.35);
  const inFront = new THREE.Vector3();
  const origin = new THREE.Vector3();
  const destination = new THREE.Vector3();
  const restYaw = .14;
  let motion;
  let sipped = false;

  function place() {
    mesh.position.copy(rest);
    mesh.rotation.set(0, restYaw, 0);
  }
  place();

  function move(x, z, bounds) {
    rest.x = clamp(x, bounds.xL + .58, bounds.xR - .58);
    rest.z = clamp(z, bounds.zMin + .2, bounds.zMax - .2);
    if (!motion) place();
  }

  function cancel() {
    if (!motion) return;
    if (motion.phase === 'approach' || motion.phase === 'carry') motion.actor.physics.cancelHop();
    motion = null;
    place();
  }

  function start(actor, kind = 'drink') {
    if (!room.visible || !FIRE_MUG_ACTIONS.includes(kind) || (motion && motion.phase !== 'held') ||
        actor.world.grab.on || actor.expression.ex.pose) return false;
    if (motion?.phase === 'held' && kind === 'pick_mug') return true;
    if (!motion && kind === 'put_mug') return true;
    actor.expression.touch(performance.now() / 1000, { wakeHop: false });
    const alreadyHeld = motion?.phase === 'held';
    motion = { actor, kind, phase: 'approach', time: 0 };
    if (alreadyHeld) beginHeldAction();
    return true;
  }

  function setPhase(phase) {
    motion.phase = phase;
    motion.time = 0;
    origin.copy(mesh.position);
  }

  function beginHeldAction() {
    const { actor, kind } = motion;
    const { body, bounds } = actor.world;
    if (kind === 'drink') { setPhase('sip'); return; }
    if (kind === 'pick_mug') { setPhase('held'); return; }
    if (kind === 'bring_mug') { setPhase('carry'); return; }
    if (kind === 'put_mug') {
      destination.copy(rest);
      setPhase('setdown');
      return;
    }
    destination.set(body.x < 0 ? bounds.xL + .95 : bounds.xR - .95, rest.y, bounds.zMin + .3);
    setPhase('toss');
  }

  function hopToward(actor, x, z, radius) {
    const { body, bounds } = actor.world;
    const halfWidth = actor.geometry.HALFW;
    const dx = clamp(x, bounds.xL + halfWidth, bounds.xR - halfWidth) - body.x;
    const dz = clamp(z, bounds.zMin, bounds.zMax) - body.z;
    const far = Math.hypot(dx, dz) > radius;
    if (far && !body.air) {
      actor.physics.hop(reduceMotion ? 2.5 : 3.5, clamp(dx * 2.4 - body.vx, -5, 5),
        clamp(dz * 2.4 - body.vz, -5, 5));
    }
    return !far && !body.air;
  }

  function land() {
    rest.copy(destination);
    motion = null;
    place();
  }

  function update(dt) {
    if (!motion) return;
    const { actor } = motion;
    const { body: position, bounds, grab, sq } = actor.world;
    if (grab.on || actor.expression.ex.pose) { cancel(); return; }
    const { HALFW, FLOOR, TOP } = actor.geometry;
    motion.time += dt;
    const { phase, time } = motion;
    inFront.set(position.x + HALFW * .43, FLOOR + position.y + .37, position.z + HALFW * .72 + .19);

    if (phase === 'approach') {
      if (time > 6) { cancel(); return; }
      if (hopToward(actor, rest.x, rest.z - HALFW - .25, .67)) setPhase('lift');
    } else if (phase === 'lift') {
      mesh.position.copy(rest).lerp(inFront, THREE.MathUtils.smoothstep(time, 0, .42));
      if (time >= .42) beginHeldAction();
    } else if (phase === 'held' || phase === 'carry') {
      mesh.position.copy(inFront);
      if (phase === 'carry' && (time > 4 || hopToward(actor, 0, bounds.zMax - 1.05, .58))) {
        destination.set(clamp(inFront.x, bounds.xL + .58, bounds.xR - .58), rest.y,
          clamp(inFront.z, bounds.zMin + .2, bounds.zMax - .2));
        setPhase('setdown');
      }
    } else if (phase === 'sip') {
      inFront.set(position.x + HALFW * .23,
        FLOOR + position.y + (TOP - FLOOR) * (.49 + .38 * sq) - .53,
        position.z + HALFW * .82 + .29);
      const tilt = THREE.MathUtils.smoothstep(time, .25, .49) * (1 - THREE.MathUtils.smoothstep(time, .74, 1.02));
      mesh.position.copy(origin).lerp(inFront, THREE.MathUtils.smoothstep(time, 0, .35));
      mesh.rotation.set(-tilt * .56, restYaw, -tilt * .13);
      if (time >= .74) sipped = true;
      if (time >= 1.02) {
        destination.copy(rest);
        setPhase('setdown');
      }
    } else {
      const toss = phase === 'toss';
      const progress = Math.min(1, time / (toss ? .66 : .48));
      mesh.position.copy(origin).lerp(destination, toss ? progress : THREE.MathUtils.smoothstep(progress, 0, 1));
      if (toss) {
        mesh.position.y += Math.sin(Math.PI * progress) * (reduceMotion ? .18 : .95);
        mesh.rotation.z = Math.sin(Math.PI * progress) * (reduceMotion ? .12 : .85);
      }
      if (progress === 1) land();
    }
  }

  return {
    mesh, move, start, cancel, update,
    fit: bounds => move(rest.x, rest.z, bounds),
    get available() { return room.visible && !motion; },
    get state() { return motion?.phase === 'held' ? 'held' : motion ? 'moving' : 'counter'; },
    get sipped() { return sipped; },
  };
}
