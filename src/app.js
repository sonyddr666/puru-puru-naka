import * as THREE from 'three';
import { createStage } from './core/stage.js';
import { createLoop } from './core/loop.js';
import { createStore, STORAGE_KEY } from './core/storage.js';
import { canvas, noGlEl, coarse, reduceMotion } from './core/media.js';
import { smoothTo } from './core/math.js';
import { FLAVORS } from './data/flavors.js';
import { WALL_Z } from './slime/constants.js';
import { createCreature } from './slime/creature.js';
import { createCompany } from './slime/company.js';
import { createCounter } from './scene/counter.js';
import { createWall } from './scene/wall.js';
import { createDroplets } from './scene/droplets.js';
import { createCameraRig } from './scene/camera.js';
import { createThemes } from './scene/themes.js';
import { createFireRoom } from './scene/fire-room.js';
import { FIRE_MUG_ACTIONS } from './data/playground.js';
import { createToys } from './scene/toys.js';
import { createPurrCounter } from './ui/counter.js';
import { createFlavorPicker } from './ui/flavors.js';
import { createPlayground } from './ui/playground.js';
import { createPhotoMode } from './ui/photo.js';
import { createI18n } from './i18n/index.js';
import { createLangPicker } from './ui/langs.js';
import { createHint } from './ui/hint.js';
import { createChat } from './ui/chat.js';
import { sfx } from './audio/sfx.js';

/** Composition root. All creatures, toys and controls share one render loop. */
export function boot() {
  const i18n = createI18n();
  i18n.apply();
  createLangPicker(i18n);
  const store = createStore();
  const saved = store.state;
  const hint = createHint(i18n);
  const counter = createPurrCounter(hint, store);
  let stage;
  try { stage = createStage(canvas); }
  catch (error) { noGlEl.classList.add('show'); console.error(error); return; }
  const { renderer, scene, camera, DPR } = stage;
  const touches = new Map();
  let active, main, company, droplets, photo, chat;
  let frameNo = 0, t = 0;
  const actors = [];
  const getActors = () => actors;
  const creatureOptions = {
    canvas, counter, sfx, coarse, touches,
    splash: (n, body, spread) => droplets?.splashDrops(n, body, spread),
    isFriendActive: friend => active === friend && !photo?.active,
  };
  main = createCreature(scene, camera, {
    ...creatureOptions, isActive: () => active === main && !photo?.active,
    onGrab: () => chat?.grabbed(),
    voiceFrame: dt => chat?.frame(dt),
    roomMode: () => themes.current,
  });
  actors.push(main);
  active = main;
  const { geometry, world, palette } = main;

  const counterMesh = createCounter(scene, { floorY: geometry.FLOOR, DPR, wallZ: WALL_Z, getFrameNo: () => frameNo });
  counterMesh.oncePerFrame();
  const wall = createWall(scene);
  droplets = createDroplets(scene, { floorY: geometry.FLOOR, HALFW: geometry.HALFW, attenColor: palette.current.atten });
  const rig = createCameraRig(camera, renderer, {
    counter: counterMesh.counter, wall: wall.wall, paintWall: wall.paint, wallZ: WALL_Z,
    body: world.body, bounds: world.bounds, geometry,
  });
  rig.layout(); rig.updateBounds();
  const themes = createThemes(scene, counterMesh.counter, wall, store);
  const fire = createFireRoom(scene, geometry.FLOOR);
  fire.mug.fit(world.bounds);
  let pendingMugAction;
  const drinkMug = () => themes.current === 'fire' && !photo?.active && fire.mug.start(main);
  function express(message, withAction, duration) {
    if (message.theme !== themes.current || photo?.active) return;
    const reply = message.reply;
    if (withAction && reply.action !== 'none') {
      if (themes.current === 'fire' && FIRE_MUG_ACTIONS.includes(reply.action)) pendingMugAction = reply.action;
      else if (!world.grab.on) main.actions.run(reply.action);
    }
    const emotion = reply.action === 'nap' ? 'sleep' : reply.emotion;
    main.expression.feel(emotion, Math.max(duration, 3 + reply.intensity * 4), reply.intensity);
  }
  chat = createChat({
    getContext: () => ({
      theme: themes.current,
      flavor: store.state.flavor,
      scene: themes.current === 'fire' ? {
        mug: toys.mugDragged ? 'dragging' : fire.mug.state,
        sipped: fire.mug.sipped,
      } : undefined,
    }),
    onReply: express,
  });

  function select(actor) {
    if (active === actor) return;
    active?.grabCtl.release('cancel');
    if (active) active.raycast.pointer.has = false;
    active = actor;
  }
  const flavors = createFlavorPicker(palette, {
    i18n, sfx, touch: main.expression.touch, push: main.physics.push,
    hearts: main.fx.hearts, slimeScreenTop: main.fx.slimeScreenTop,
    onTap: () => select(main),
    get sqv() { return world.sqv; }, set sqv(value) { world.sqv = value; }, ex: main.expression.ex,
    onSelect: flavor => { select(main); store.update({ flavor: flavor.id }); },
  });
  flavors.render(0);
  flavors.setFlavor(Math.max(0, FLAVORS.findIndex(flavor => flavor.id === saved.flavor)), { quiet: true });
  const setFlavor = index => flavors.setFlavor(index);
  company = createCompany(main, {
    scene, camera, store, creatureOptions, counter, sfx,
    onCreate: friend => { actors.push(friend); friend.bind(setFlavor); },
    onRemove: friend => { if (active === friend) select(main); actors.splice(1, 1); touches.clear(); },
  });
  const toys = createToys({ scene, camera, canvas, floor: geometry.FLOOR, store, counter, sfx, getActors,
    getActive: () => active, mug: fire.mug, canInteract: () => !photo?.active });
  // Toy picking runs first; otherwise choose the nearest creature before its input handler runs.
  canvas.addEventListener('pointerdown', event => {
    if (photo?.active || touches.size || active.world.grab.on) return;
    let nearest = null;
    for (const actor of getActors()) {
      actor.raycast.setNDC(event, canvas);
      const hit = actor.raycast.hitTest();
      if (hit && (!nearest || hit.distance < nearest.distance)) nearest = { actor, distance: hit.distance };
    }
    if (nearest) select(nearest.actor);
  });
  main.bind(setFlavor);
  photo = createPhotoMode({ renderer, scene, camera, canvas, i18n, getActors, store });
  themes.setTheme(saved.theme);
  company.setEnabled(saved.companion);
  toys.setKind(saved.toy);
  createPlayground({ i18n, store, themes, toys, company, getActive: () => active, getActors,
    selectActor: select, photo, canvas, drinkMug });
  store.subscribe(state => {
    const index = FLAVORS.findIndex(flavor => flavor.id === state.flavor);
    if (palette.index !== index) flavors.setFlavor(index, { quiet: true });
    if (themes.current !== state.theme) themes.setTheme(state.theme);
    if (company.enabled !== state.companion) company.setEnabled(state.companion);
    if (toys.kind !== state.toy) toys.setKind(state.toy);
  });
  addEventListener('storage', event => { if (event.key === STORAGE_KEY) store.refresh(); });

  const camOff = new THREE.Vector2();
  const projected = new THREE.Vector3();
  const dropColor = new THREE.Color();
  const white = new THREE.Color(1, 1, 1);
  function frame(dt) {
    frameNo++; t += dt;
    const now = performance.now() / 1000;
    rig.updateBounds();
    company.update(dt, now);
    fire.enabled = themes.current === 'fire';
    fire.update(t);
    for (const actor of getActors()) actor.update(dt, t, now);
    toys.update(dt, now);
    fire.mug.update(dt);
    if (themes.current !== 'fire' || photo.active) pendingMugAction = null;
    if (pendingMugAction && !toys.mugDragged && fire.mug.start(main, pendingMugAction)) pendingMugAction = null;
    dropColor.copy(palette.current.atten).lerp(white, 0.3 + 0.7 * palette.material.rainbow);
    droplets.dropMat.attenuationColor.copy(dropColor);
    droplets.update(dt, world.body);
    counterMesh.counter.material.uniforms.uFocal.value = camera.position.distanceTo(main.slime.position);
    const pointer = active.raycast.pointer;
    if (!reduceMotion && pointer.has && !coarse && !active.world.grab.on && !photo.active) {
      camOff.set(smoothTo(camOff.x, pointer.nx * 0.18, 2.5, dt), smoothTo(camOff.y, pointer.ny * 0.1, 2.5, dt));
    } else camOff.set(smoothTo(camOff.x, 0, 2, dt), smoothTo(camOff.y, 0, 2, dt));
    camera.position.set(rig.view.base.x + camOff.x, rig.view.base.y + camOff.y, rig.view.base.z);
    camera.lookAt(rig.view.target);
    renderer.render(scene, camera);
  }
  function cancelInteraction() {
    for (const actor of actors) {
      actor.grabCtl.release('cancel'); actor.physics.cancelHop();
      actor.world.pinch.value = 0; actor.world.pinch.last = -10;
      actor.raycast.pointer.has = false; actor.raycast.pointer.lastHit = false;
    }
    for (const id of touches.keys()) {
      try { canvas.releasePointerCapture(id); } catch { /* Already released. */ }
    }
    touches.clear(); toys.cancelDrag(); canvas.style.cursor = '';
    fire.mug.cancel();
    pendingMugAction = null;
  }
  const loop = createLoop(dt => frame(Math.min(dt, 1 / 30)), { onPause: cancelInteraction });
  addEventListener('blur', cancelInteraction);
  let resizeFrame = 0;
  addEventListener('resize', () => {
    if (resizeFrame) return;
    resizeFrame = requestAnimationFrame(() => {
      resizeFrame = 0;
      rig.layout();
      rig.updateBounds();
      fire.mug.fit(world.bounds);
    });
  });
  for (let i = 0; i < 7; i++) {
    const angle = Math.random() * Math.PI * 2, radius = geometry.HALFW * (1.05 + Math.random() * 0.8);
    droplets.addDrop(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.7, 0.02 + Math.random() * 0.05, 9999);
  }
  main.physics.writeGeometry();
  loop.start();
  const fontTimeout = new Promise(resolve => setTimeout(resolve, 2500));
  Promise.race([document.fonts.ready, fontTimeout]).finally(() => {
    renderer.compile(scene, camera);
    requestAnimationFrame(() => {
      canvas.classList.add('ready');
      setTimeout(() => { main.expression.started = true; }, reduceMotion ? 0 : 350);
    });
  });
  // Readable QA state: tests use the same controls as users to change the game.
  window.__pururu = {
    get state() {
      return {
        body: { ...world.body }, sq: world.sq, grab: world.grab.on, sleeping: main.expression.ex.sleeping,
        count: counter.value, flavor: store.state.flavor, theme: themes.current, companion: company.enabled,
        toy: toys.kind, objects: toys.objects.filter(object => object.visible).length,
        action: active.actions.current, mood: active.expression.ex.mood, photo: photo.active,
        jaw: main.face.speech.value.x, resisting: main.expression.ex.resisting,
        N: geometry.N, frames: frameNo, bounds: { ...world.bounds },
      };
    },
    doJump: () => active.actions.run('jump'), setFlavor, push: main.physics.push,
    setLang: i18n.set, t: i18n.t, get lang() { return i18n.get(); },
    screen() {
      main.slime.localToWorld(projected.set(0, 0.1, 0.4)).project(camera);
      return { x: (projected.x * 0.5 + 0.5) * innerWidth, y: (-projected.y * 0.5 + 0.5) * innerHeight };
    },
  };
  return { loop };
}
