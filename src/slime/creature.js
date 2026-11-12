import * as THREE from 'three';
import { createSlime } from './index.js';
import { createWorld } from './state.js';
import { createPhysics } from './physics.js';
import { createExpression } from './expression.js';
import { createActions } from './actions.js';
import { createPalette } from '../core/palette.js';
import { createRaycast } from '../interaction/raycast.js';
import { createGrab } from '../interaction/grab.js';
import { bindPointerEvents } from '../interaction/pointer.js';
import { createFx } from '../ui/fx.js';
import { createShadows } from '../scene/shadows.js';
import { FLAVORS } from '../data/flavors.js';
import { FIXED_STEP, MAX_SUBSTEPS } from './constants.js';
import { reduceMotion } from '../core/media.js';

/** An independent creature. The main pururu and its friend share no solver buffers. */
export function createCreature(scene, camera, options) {
  const { canvas, counter, sfx, coarse, touches, isActive, splash } = options;
  const palette = createPalette();
  const model = createSlime(scene, palette, coarse, options);
  const { geometry, slime, mesh, material, face, bubbles } = model;
  const world = createWorld(geometry);
  const physics = createPhysics(world, geometry);
  const raycast = createRaycast(camera, mesh, slime);
  const fx = createFx(camera, slime, geometry);
  const shadows = createShadows(scene, palette.current.body, geometry.FLOOR);
  const counterPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -geometry.FLOOR);
  let actions;
  const expression = createExpression(world, {
    face, physics, sfx, counter, fx, raycast, camera, slime, canvas, touches,
    prevHitLocal: new THREE.Vector3(), strokeV: new THREE.Vector3(), projPoint: new THREE.Vector3(),
    flavorId: () => FLAVORS[palette.index].id,
    splash: (n, spread) => splash?.(n, world.body, spread),
    onStroke: () => actions?.onStroke(),
    roomMode: options.roomMode,
  });
  actions = createActions(world, { expression, physics, counter, sfx, fx });
  const grabCtl = createGrab(world, geometry, {
    raycast, camera, canvas, slime, sfx, physics, ex: expression.ex,
    touch: expression.touch, hearts: fx.hearts, onCount: counter.bump, onPoke: actions.onPoke,
    onGrab: options.onGrab && (() => {
      expression.ex.resisting = true;
      expression.feel('angry', 1.35, 0.85);
      world.sqv -= 0.85;
      options.onGrab();
    }),
    onRelease: () => {
      expression.ex.resisting = false;
      expression.feel('angry', 0.8, 0.55);
    },
  });
  fx.useSquash(() => world.sq);
  let acc = 0, unbind = () => {};
  let voiceTilt = 0;
  const white = new THREE.Color(1, 1, 1);
  const size = (options.radius ?? 1.16) / 1.16;
  const colorKeys = Object.keys(palette.current);
  const materialKeys = Object.keys(palette.material);

  function setFlavor(index) {
    if (!FLAVORS[index]) return;
    palette.index = index;
    const flavor = FLAVORS[index];
    for (const key of Object.keys(palette.target)) palette.target[key].set(flavor[key]);
    Object.assign(palette.materialTarget, { trans: flavor.trans, irid: flavor.irid, rainbow: flavor.rainbow, rough: flavor.rough });
  }
  function bind(setFlavorFromUI) {
    unbind = bindPointerEvents({
      canvas, camera, world, geometry, raycast, grabCtl, physics, sfx, counterPlane, touches,
      ex: expression.ex, touch: expression.touch, onCount: counter.bump, onPoke: actions.onPoke,
      doJump: () => actions.run('jump'), setFlavor: setFlavorFromUI, push: physics.push, isActive,
    });
  }
  function update(dt, t, now) {
    palette.shader.uTime.value = t;
    const rate = 1 - Math.exp(-dt * 5);
    for (const key of colorKeys) palette.current[key].lerp(palette.target[key], rate);
    for (const key of materialKeys) palette.material[key] += (palette.materialTarget[key] - palette.material[key]) * rate;
    material.color.copy(palette.current.body);
    material.attenuationColor.copy(palette.current.atten);
    material.transmission = palette.material.trans; material.iridescence = palette.material.irid;
    material.roughness = palette.material.rough; palette.shader.uRainbow.value = palette.material.rainbow;
    shadows.pool.material.color.copy(palette.current.body);
    if (isActive()) expression.hover(dt, now);
    else { raycast.pointer.has = false; raycast.pointer.lastHit = false; }
    if (world.grab.on) grabCtl.update(now);
    if (now - world.pinch.last > 0.16) world.pinch.value = 0;
    expression.idle(t, now);
    actions.update(t, now);
    const voice = options.voiceFrame?.(dt);
    if (voice) {
      face.speech.value.set(voice.open, voice.round);
      const gain = reduceMotion ? 0.22 : 1;
      const resolve = expression.ex.resisting ? 0.5 : 1;
      world.sqTarget -= (voice.open * 0.035 + voice.pulse * 0.06) * gain * resolve;
      if (expression.ex.resisting) world.sqTarget -= (0.025 + 0.024 * Math.sin(t * 25)) * gain;
      const tilt = world.grab.on ? 0 : voice.open * Math.sin(t * 9) * 0.08 * gain;
      voiceTilt += (tilt - voiceTilt) * (1 - Math.exp(-14 * dt));
    }
    let stepped = false;
    if (expression.started && !expression.ex.pose) {
      acc += dt;
      let n = 0;
      while (acc >= FIXED_STEP && n < MAX_SUBSTEPS) { physics.step(FIXED_STEP); acc -= FIXED_STEP; n++; }
      if (n === MAX_SUBSTEPS) acc = 0;
      stepped = n > 0;
    } else acc = 0;
    expression.drainEvents(now);
    if (stepped) physics.writeGeometry();
    expression.updateFace(dt, t, now); expression.updateGaze(dt, t);
    slime.position.set(world.body.x, world.body.y, world.body.z);
    slime.rotation.set(0, expression.yaw + actions.rotationY, actions.rotationZ + voiceTilt);
    for (const bubble of bubbles) {
      const u = bubble.userData;
      u.phase = (u.phase + dt * u.speed * (reduceMotion ? 0.3 : 1)) % 1;
      const height = geometry.TOP - geometry.FLOOR;
      const y = geometry.FLOOR + height * (0.12 + u.phase * 0.7);
      const radius = u.rad * size * Math.sin(Math.PI * u.phase);
      bubble.position.set(Math.cos(u.ang + t * 0.2) * radius * 0.9,
        geometry.FLOOR + (y - geometry.FLOOR) * (1 + world.sq),
        -0.25 * size + Math.sin(u.ang + t * 0.2) * radius * 0.5);
      bubble.scale.setScalar(u.size * size * (0.3 + 0.7 * Math.sin(Math.PI * u.phase)));
    }
    shadows.update(world.body, world.sq, palette.material.rainbow);
    if (size !== 1) for (const mesh of [shadows.shadowSoft, shadows.shadowCore, shadows.pool]) mesh.scale.multiplyScalar(size);
  }
  function dispose() {
    unbind(); grabCtl.release('cancel'); physics.dispose(); shadows.dispose(); model.dispose();
  }
  return { ...model, palette, world, physics, raycast, fx, expression, actions, grabCtl, bind, update, setFlavor, dispose,
    attenuation: () => palette.current.atten.clone().lerp(white, 0.3 + 0.7 * palette.material.rainbow) };
}
