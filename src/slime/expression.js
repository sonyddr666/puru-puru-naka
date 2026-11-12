import { smoothTo, clamp } from '../core/math.js';
import { reduceMotion, coarse } from '../core/media.js';
import { GRAVITY } from './constants.js';
import { FLAVOR_PERSONALITIES, PERSONALITIES } from '../data/playground.js';

/**
 * Decides how the slime looks and where it looks.
 *
 * Each frame it picks one expression target (open / happy / squeeze /
 * sleep / surprise) from what is happening to the body, then eases the
 * shader uniforms towards it. Keeping this separate from the physics means
 * the jelly can react to things the solver knows nothing about (sleepiness,
 * blinking, your cursor).
 */
export function createExpression(world, deps) {
  const { body, grab, pinch } = world;
  const { face, physics, sfx, counter, fx, raycast, camera, slime } = deps;

  const ex = {
    last: performance.now() / 1000,
    sleeping: false,
    squeezeUntil: 0, happyUntil: 0, surpriseUntil: 0, strokeLevel: 0,
    nextBlink: 1.5, blinkT: -1, nextIdle: 6, lastZ: 0, lastHearts: 0,
    mood: '', moodUntil: 0, angryUntil: 0, affectionUntil: 0, pose: '', intensity: 1, resisting: false,
  };

  let yaw = 0;
  let entered = reduceMotion;
  let started = false;

  /** Any interaction wakes it up. */
  function touch(now, { wakeHop = true } = {}) {
    if (ex.sleeping) {
      ex.sleeping = false;
      ex.surpriseUntil = now + 0.8;
      if (!reduceMotion && wakeHop) physics.hop(3.6);
      sfx.wake();
    }
    ex.last = now;
  }

  function personality() {
    if (deps.roomMode?.() === 'fire') return PERSONALITIES.calm;
    return PERSONALITIES[FLAVOR_PERSONALITIES[deps.flavorId?.() ?? 'soda']] ?? PERSONALITIES.curious;
  }

  function feel(mood, duration = 3, intensity = 1) {
    const now = performance.now() / 1000;
    touch(now, { wakeHop: false });
    ex.mood = mood; ex.moodUntil = now + duration; ex.intensity = intensity;
    if (mood === 'sleep') ex.sleeping = true;
  }

  /** Idle behaviour: fall asleep, then wander home in little hops. */
  function idle(t, now) {
    const idleFor = now - ex.last;
    const profile = personality();
    if (ex.pose) { world.sqTarget = 0; return; }
    if (!ex.sleeping && idleFor > profile.sleepAfter && !grab.on && !body.air) {
      ex.sleeping = true;
      ex.lastZ = now;
    }

    if (ex.sleeping) {
      world.sqTarget = (reduceMotion ? 0 : -0.035 + 0.035 * Math.sin(t * 1.3)) + pinch.value;
      if (now - ex.lastZ > 1.5 && !reduceMotion) { ex.lastZ = now; fx.zzz(); }
      return;
    }

    world.sqTarget = (reduceMotion ? 0 : 0.012 * profile.pace * Math.sin(t * 2.4 * profile.pace)) + pinch.value;
    if (!reduceMotion && t > ex.nextIdle) {
      ex.nextIdle = t + (4 + Math.random() * 4) / profile.pace;
      if (idleFor > 6 && !grab.on && !body.air && entered) {
        const dx = -body.x, dz = -body.z, dist = Math.hypot(dx, dz);
        if (dist > 1.2) {
          // wander back toward the middle in little hops
          const reach = Math.min(dist, 1.6), vy = 3.6, airtime = 2 * vy / -GRAVITY;
          physics.hop(vy, dx / dist * reach / airtime * 0.8, dz / dist * reach / airtime * 0.8);
        } else if (Math.random() < 0.35) physics.hop(2.8 * Math.min(profile.pace, 1.25));
        else physics.push(Math.random() < 0.5 ? -1.2 : 1.2, 0);
      }
    }
  }

  /** Stroking it with the cursor deforms it and builds up affection. */
  function hover(dt, now) {
    const pointer = raycast.pointer;
    pointer.over = false;

    if (!(pointer.has && !grab.on && started && deps.touches.size < 2)) {
      if (!grab.on) pointer.lastHit = false;
      pointer.moved = false;
      ex.strokeLevel = Math.max(0, ex.strokeLevel - dt * 0.45);
      return;
    }

    const hit = raycast.hitTest();
    if (!hit) {
      if (pointer.lastHit) deps.canvas.style.cursor = '';
      pointer.lastHit = false;
    } else {
      pointer.over = true;
      const g = raycast.hitVertex(hit);
      const hitLocal = raycast.local;
      slime.worldToLocal(hitLocal.copy(hit.point));

      if (pointer.lastHit && pointer.moved) {
        const v = deps.strokeV.subVectors(hitLocal, deps.prevHitLocal)
          .divideScalar(Math.max(dt, 1 / 120));
        const sp = v.length();
        if (sp > 0.2) {
          if (sp > 12) v.multiplyScalar(12 / sp);
          physics.stroke(g, v, sp);
          if (sp > 2.5 && !body.air) physics.push(v.x * 0.06, v.z * 0.06, 7);
          ex.strokeLevel = Math.min(2, ex.strokeLevel + Math.min(sp, 6) * dt * 0.35);
          if (ex.strokeLevel > 0.45) {
            ex.angryUntil = 0;
            ex.affectionUntil = now + 1;
            if (ex.mood === 'angry') ex.moodUntil = 0;
            deps.onStroke?.();
          }
          if (ex.strokeLevel > 1.1 && now - ex.lastHearts > 3.5) {
            ex.lastHearts = now;
            fx.hearts(pointer.x, pointer.y, 4);
            counter.bump();
          }
        }
      }
      deps.prevHitLocal.copy(hitLocal);
      pointer.lastHit = true;
      deps.canvas.style.cursor = 'grab';
    }

    pointer.moved = false;
    ex.strokeLevel = Math.max(0, ex.strokeLevel - dt * 0.45);
  }

  /** Picks one expression from the current situation and eases towards it. */
  function updateFace(dt, t, now) {
    const tg = { open: 1, happy: 0, squeeze: 0, sleep: 0, surprise: 0 };
    const bodySpeed = Math.hypot(body.vx, body.vz);

    if (ex.sleeping) tg.sleep = 1;
    else if (grab.on) {
      const s = grab.stretch / 2.3;
      if (s > 0.5 || bodySpeed > 7) tg.squeeze = 1;
      else if (body.y > 0.25) tg.surprise = 1;
      else tg.happy = 1;
    }
    else if (now < ex.squeezeUntil) tg.squeeze = 1;
    else if (body.air && body.vy > 0) tg.happy = 1;
    else if (body.air) tg.surprise = 1;
    else if (bodySpeed > 3) tg.surprise = 1;
    else if (Math.abs(pinch.value) > 0.2) { tg.squeeze = pinch.value < 0 ? 1 : 0; tg.surprise = pinch.value > 0 ? 1 : 0; }
    else if (now < ex.surpriseUntil) tg.surprise = 1;
    else if (now < ex.happyUntil || ex.strokeLevel > 0.45) tg.happy = 1;

    const mood = ex.pose || (now < ex.moodUntil ? ex.mood : '');
    let angry = now < ex.angryUntil ? 1 : 0;
    let affection = now < ex.affectionUntil ? 1 : 0;
    let wink = 0;
    if (mood) {
      Object.assign(tg, { open: 1, happy: 0, squeeze: 0, sleep: 0, surprise: 0 });
      angry = mood === 'angry' ? 1 : 0;
      affection = mood === 'affection' ? 1 : 0;
      wink = mood === 'wink' ? 1 : 0;
      if (mood === 'happy' || mood === 'affection') tg.happy = 1;
      if (mood === 'surprise') tg.surprise = 1;
      if (mood === 'sleep') tg.sleep = 1;
      if (!ex.pose && mood !== 'sleep') {
        tg.happy *= ex.intensity; tg.surprise *= ex.intensity;
        angry *= ex.intensity; affection *= ex.intensity; wink *= ex.intensity;
      }
    } else if (angry) tg.happy = 0;
    if ((!mood || mood === 'neutral') && deps.roomMode?.() === 'fire' && !grab.on && !ex.sleeping && !tg.surprise) {
      tg.open = 0.78;
      tg.happy *= 0.28;
    }
    if (ex.resisting) {
      tg.happy = 0; tg.sleep = 0; tg.surprise = 0;
      tg.squeeze = Math.min(0.4, grab.stretch * 0.23);
      angry = 0.94; affection = 0; wink = 0;
    }

    // blink, unless the eyes are busy doing something else
    if (!ex.sleeping && !ex.pose && !wink && tg.happy + tg.squeeze === 0) {
      if (t > ex.nextBlink) {
        ex.blinkT = t;
        ex.nextBlink = t + 2 + Math.random() * 3.5 + (Math.random() < 0.2 ? -1.6 : 0);
      }
      const bt = t - ex.blinkT;
      if (bt >= 0 && bt < 0.16) tg.open = Math.abs(bt - 0.08) / 0.08 * 0.9 + 0.1;
    }

    const fr = 22;
    face.eye.x = smoothTo(face.eye.x, tg.open, tg.open < face.eye.x ? 60 : fr, dt);
    face.eye.y = smoothTo(face.eye.y, tg.happy, fr, dt);
    face.eye.z = smoothTo(face.eye.z, tg.squeeze, fr * 1.3, dt);
    face.eye.w = smoothTo(face.eye.w, tg.sleep, 5, dt);
    face.surprise.value = smoothTo(face.surprise.value, tg.surprise, fr, dt);
    face.angry.value = smoothTo(face.angry.value, angry, fr, dt);
    face.affection.value = smoothTo(face.affection.value, affection, 8, dt);
    face.wink.value = smoothTo(face.wink.value, wink, fr, dt);
  }

  /** Where the eyes point: at your cursor, or wandering on their own. */
  function updateGaze(dt, t) {
    const pointer = raycast.pointer;
    let lx = 0, ly = 0;
    if (!ex.sleeping) {
      if (grab.on || pointer.has) {
        slime.localToWorld(deps.projPoint.set(0, 0.2, 0)).project(camera);
        lx = clamp((pointer.nx - deps.projPoint.x) * 1.6, -1, 1);
        ly = clamp((pointer.ny - deps.projPoint.y) * 1.6, -1, 1);
      } else if (!coarse) {
        lx = Math.sin(t * 0.37) * 0.35;
        ly = Math.sin(t * 0.23) * 0.2;
      }
    }
    face.look.x = smoothTo(face.look.x, lx, 8, dt);
    face.look.y = smoothTo(face.look.y, ly, 8, dt);
    yaw = smoothTo(yaw, face.look.x * 0.3, 4, dt);
  }

  /** Drains physics events into sound, hearts and splashes. */
  function drainEvents(now) {
    let ev;
    while ((ev = world.events.shift())) {
      if (ev.type === 'land') {
        if (ev.impact <= 2.5) continue;
        ex.squeezeUntil = now + 0.24;
        ex.happyUntil = now + (entered ? 1.0 : 2.2);
        sfx.land(ev.impact);
        if (ev.impact > 4.5) deps.splash(Math.min(7, Math.round(ev.impact * 0.6)));
        if (!entered) {
          entered = true;
          const p = fx.slimeScreenTop();
          fx.hearts(p.x, p.y + 30, 4);
        }
      } else if (ev.type === 'wall' && ev.impact > 2) {
        ex.squeezeUntil = now + 0.3;
        ex.happyUntil = now + 1.0;
        sfx.land(ev.impact * 0.8);
        if (ev.impact > 5) deps.splash(3, 0.5);
      }
    }
  }

  return {
    ex, touch, feel, personality, idle, hover, updateFace, updateGaze, drainEvents,
    get yaw() { return yaw; },
    /** The simulation only runs once the first frame is on screen. */
    set started(v) { started = v; },
    get started() { return started; },
  };
}
