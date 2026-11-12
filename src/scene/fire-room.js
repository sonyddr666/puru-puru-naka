import * as THREE from 'three';
import { reduceMotion } from '../core/media.js';
import { createFireMug } from './fire-mug.js';

/** A single instanced flame draw, with the live soft body in front of the back row. */
export function createFireRoom(scene, floor) {
  const room = new THREE.Group();
  room.visible = false;
  scene.add(room);

  const flameGeometry = new THREE.PlaneGeometry(1, 1);
  flameGeometry.translate(0, 0.5, 0);
  const time = { value: 0 };
  const flameMaterial = new THREE.ShaderMaterial({
    uniforms: { uTime: time },
    vertexShader: `
      varying vec2 vUv;
      varying float vSeed;
      void main() {
        vUv = uv;
        vSeed = instanceMatrix[3].x * 1.3 + instanceMatrix[3].z * 0.6;
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      varying vec2 vUv;
      varying float vSeed;
      void main() {
        float t = uTime * 2.0 + vSeed;
        float y = vUv.y / (0.86 + 0.10 * sin(t) + 0.04 * sin(t * 2.3));
        float lean = y * y * (0.14 + 0.11 * sin(t + y * 4.0));
        float x = vUv.x - 0.50 - lean;
        float width = 0.35 * pow(max(0.0, 1.0 - y), 0.82)
          * (0.90 + 0.10 * sin(y * 16.0 + t * 1.5));
        float edge = abs(x) - width;
        if (y >= 0.99 || edge > 0.014) discard;
        vec3 outer = mix(vec3(1.0, 0.57, 0.12), vec3(0.92, 0.23, 0.065), y);
        float inner = 1.0 - smoothstep(0.0, 0.025, abs(x + y * 0.06) - width * 0.59 + y * 0.09);
        vec3 hot = mix(vec3(1.0, 0.93, 0.57), vec3(1.0, 0.75, 0.25), y);
        vec3 flame = mix(outer, hot, inner * (1.0 - smoothstep(0.62, 0.8, y)));
        flame = mix(vec3(0.49, 0.13, 0.06), flame, 1.0 - smoothstep(-0.03, 0.01, edge));
        gl_FragColor = vec4(flame, 1.0);
      }
    `,
  });
  const arrangement = [
    [-5.2,-3.9,1.6,4.2],[-4.3,-3.8,1.9,3.3],[-3.4,-3.6,1.55,4.2],[-2.65,-3.5,1.9,3.1],
    [-1.6,-3.6,1.55,1.65],[-0.65,-3.7,1.55,1.05],[0.3,-3.6,1.45,1.2],[1.2,-3.7,1.65,2.05],
    [2.25,-3.55,1.8,3.1],[3.1,-3.5,1.7,4.4],[4.1,-3.7,1.8,3.15],[5.1,-3.8,1.85,4.3],
    [-5.4,0.8,2.2,3.8],[-4.05,1.5,1.65,2.85],[-3.25,1.9,1.2,1.9],
    [3.25,1.9,1.6,2.3],[4.3,1.4,1.8,3.2],[5.3,0.9,1.95,4.3],
  ];
  const flames = new THREE.InstancedMesh(flameGeometry, flameMaterial, arrangement.length);
  const transform = new THREE.Object3D();
  arrangement.forEach(([x, z, w, h], i) => {
    transform.position.set(x, floor + 0.01, z);
    transform.scale.set(w, h, 1);
    transform.updateMatrix();
    flames.setMatrixAt(i, transform.matrix);
  });
  room.add(flames);

  const positions = new Float32Array(36 * 3);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
  const sparks = new THREE.Points(geometry, new THREE.PointsMaterial({
    color: 0xffc165, size: 0.052, transparent: true, opacity: 0.85, depthWrite: false,
  }));
  sparks.frustumCulled = false;
  room.add(sparks);

  const mug = createFireMug(room, floor);

  const light = new THREE.PointLight(0xff793b, 9, 14, 2);
  light.position.set(-2.5, floor + 2.3, 2);
  room.add(light);
  let last = -1;
  return {
    mug,
    set enabled(enabled) {
      if (room.visible && !enabled) mug.cancel();
      room.visible = enabled;
    },
    update(t) {
      if (!room.visible) return;
      const clock = reduceMotion ? 0 : t;
      time.value = clock;
      light.intensity = 9 + 1.4 * Math.sin(clock * 8) + 0.8 * Math.sin(clock * 13.1);
      if (clock - last < 1 / 30) return;
      last = clock;
      for (let i = 0; i < positions.length / 3; i++) {
        const age = (clock * (0.13 + (i % 5) * 0.026) + i * 0.618) % 1;
        positions[i * 3] = Math.sin(i * 19.73) * 5.5 + Math.sin(age * 4 + i) * 0.35;
        positions[i * 3 + 1] = floor + 0.4 + 5.6 * age;
        positions[i * 3 + 2] = -3.25 + (i % 3) * 0.85;
      }
      geometry.attributes.position.needsUpdate = true;
    },
  };
}
