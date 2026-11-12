import * as THREE from 'three';

/**
 * The jelly material: MeshPhysicalMaterial with chunks injected so the face
 * (eyes, highlights) is drawn analytically in the shader instead of being
 * baked into a texture.
 *
 * `face` holds the live expression uniforms: eye = (open, happy, squeeze,
 * sleep), plus surprise and look (gaze).
 */
export function createSlimeMaterial(palette) {
  const face = {
    eye: new THREE.Vector4(1, 0, 0, 0),   // open, happy, squeeze, sleep
    surprise: { value: 0 }, speech: { value: new THREE.Vector2() },
    look: new THREE.Vector2(0, 0),
    angry: { value: 0 }, affection: { value: 0 }, wink: { value: 0 },
  };

  const slimeMat = new THREE.MeshPhysicalMaterial({
    color: palette.current.body,
    roughness: 0.14,
    metalness: 0,
    transmission: 1,
    thickness: 1.1,
    ior: 1.36,
    dispersion: 0.35,
    attenuationColor: palette.current.atten,
    attenuationDistance: 2.4,
    clearcoat: 1,
    clearcoatRoughness: 0.04,
    specularIntensity: 1,
    iridescence: 0.2,
    iridescenceIOR: 1.3,
    iridescenceThicknessRange: [120, 700],
    envMapIntensity: 1.2,
  });

  slimeMat.onBeforeCompile = (sh) => {
    sh.uniforms.uInk = { value: new THREE.Color('#0A0C12') };
    sh.uniforms.uGlow = { value: palette.current.glow };
    sh.uniforms.uEye = { value: face.eye };
    sh.uniforms.uSurprise = face.surprise;
    sh.uniforms.uSpeech = face.speech;
    sh.uniforms.uLook = { value: face.look };
    sh.uniforms.uAngry = face.angry;
    sh.uniforms.uAffection = face.affection;
    sh.uniforms.uWink = face.wink;
    sh.uniforms.uRainbow = palette.shader.uRainbow;
    sh.uniforms.uTime = palette.shader.uTime;


  sh.vertexShader = sh.vertexShader
    .replace('#include <common>', '#include <common>\nattribute vec3 aRest;\nvarying vec3 vRest;')
    .replace('#include <begin_vertex>', '#include <begin_vertex>\nvRest = aRest;');

  sh.fragmentShader = sh.fragmentShader
    .replace('#include <common>', `#include <common>
      varying vec3 vRest;
      uniform vec3 uInk; uniform vec3 uGlow;
      uniform vec4 uEye; uniform float uSurprise; uniform vec2 uLook; uniform vec2 uSpeech;
      uniform float uAngry; uniform float uAffection; uniform float uWink;
      uniform float uRainbow; uniform float uTime;
      float gFace; float gHi; float gBlush;
      float sdEllipse(vec2 p, vec2 r){ float k = length(p / r); return (k - 1.0) * min(r.x, r.y); }
      float sdSeg(vec2 p, vec2 a, vec2 b){ vec2 pa = p - a, ba = b - a; float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0); return length(pa - ba * h); }
      float sdArcUp(vec2 q, float r){ if (q.y > 0.0) return abs(length(q) - r); return length(q - vec2(sign(q.x) * r, 0.0)); }
      float fillAA(float d){ float a = fwidth(d) * 0.85 + 1e-5; return 1.0 - smoothstep(-a, a, d); }
      vec3 hue(float h){ return clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0); }
      float eyeSDF(vec2 p, float side){
        float open = uEye.x, happy = uEye.y, squeeze = uEye.z, sleep = uEye.w;
        vec2 r = vec2(0.052, 0.094) * (1.0 + 0.16 * uSurprise);
        r.y = max(r.y * open, 0.012);
        r.y *= mix(1.0, 0.62, uAngry);
        float dR = sdEllipse(p, r);
        float dH = sdArcUp(p + vec2(0.0, 0.026), 0.05) - 0.0135;
        vec2 q = vec2(p.x * -side, p.y);
        float dS = min(sdSeg(q, vec2(-0.04, 0.044), vec2(0.036, 0.0)), sdSeg(q, vec2(0.036, 0.0), vec2(-0.04, -0.044))) - 0.0135;
        float dZ = sdArcUp(vec2(p.x, -p.y - 0.02), 0.048) - 0.0115;
        float d = dR;
        d = mix(d, dH, happy);
        d = mix(d, dS, squeeze);
        d = mix(d, dZ, sleep);
        if (side < 0.0) d = mix(d, dZ, uWink);
        return d;
      }
      void computeFace(){
        gFace = 0.0; gHi = 0.0; gBlush = 0.0;
        vec3 n = normalize(vRest);
        if (n.z < 0.12) return;
        vec2 p = n.xy / (0.55 + 0.45 * n.z);
        vec2 look = uLook * vec2(0.036, 0.028);
        vec2 eL = vec2(-0.235, 0.05) + look, eR = vec2(0.235, 0.05) + look;
        float eyeM = fillAA(min(eyeSDF(p - eL, -1.0), eyeSDF(p - eR, 1.0)));
        float s = 1.0 + 0.16 * uSurprise;
        float round_ = (1.0 - uEye.y) * (1.0 - uEye.z) * (1.0 - uEye.w) * smoothstep(0.45, 0.85, uEye.x);
        vec2 qa = p - eL, qb = p - eR;
        float h = 0.0;
        h = max(h, fillAA(sdEllipse(qa - vec2(0.014, 0.046) * s, vec2(0.013, 0.021) * s)));
        h = max(h, fillAA(sdEllipse(qb - vec2(0.014, 0.046) * s, vec2(0.013, 0.021) * s)));
        h = max(h, fillAA(length(qa - vec2(-0.014, -0.052) * s) - 0.0065 * s));
        h = max(h, fillAA(length(qb - vec2(-0.014, -0.052) * s) - 0.0065 * s));
        gHi = h * round_ * eyeM;
        float edge = smoothstep(0.12, 0.34, n.z);
        vec2 mouth = p - vec2(0.0, -0.17);
        float smile = sdArcUp(vec2(mouth.x, -mouth.y - 0.013), 0.052) - 0.009;
        float frown = sdArcUp(mouth + vec2(0.0, 0.025), 0.05) - 0.009;
        float mouthD = mix(smile, frown, uAngry);
        mouthD = mix(mouthD, length(mouth) - 0.028, uSurprise);
        float mouthM = fillAA(mouthD) * max(max(uEye.y, uAffection), max(max(uAngry, uSurprise), uWink));
        float jaw = uSpeech.x;
        float width = mix(0.081, 0.041, uSpeech.y);
        float phoneticMouth = sdEllipse(mouth + vec2(0.0, jaw * 0.014), vec2(width, 0.006 + jaw * 0.068));
        mouthM = mix(mouthM, fillAA(phoneticMouth), smoothstep(0.025, 0.16, jaw));
        float browL = sdSeg(qa, vec2(-0.057, 0.12), vec2(0.049, 0.08)) - 0.008;
        float browR = sdSeg(qb, vec2(-0.049, 0.08), vec2(0.057, 0.12)) - 0.008;
        float brows = fillAA(min(browL, browR)) * uAngry;
        gBlush = fillAA(min(sdEllipse(p - vec2(-0.37, -0.06), vec2(0.07, 0.03)),
                            sdEllipse(p - vec2(0.37, -0.06), vec2(0.07, 0.03)))) * uAffection * edge;
        gFace = max(max(eyeM, mouthM), brows) * edge; gHi *= edge;
      }
      vec3 rainbowAt(vec3 nr, float fr){
        float h = fract(0.58 + fr * 0.8 + nr.y * 0.38 + nr.x * 0.22 + uTime * 0.025);
        return mix(vec3(1.0), hue(h), 0.88);
      }
    `)
    .replace('#include <color_fragment>', `#include <color_fragment>
      computeFace();
      {
        vec3 nr = normalize(vRest);
        vec3 rb = rainbowAt(nr, 0.3);
        // Tint the transmitted light across the whole body, including the crown.
        diffuseColor.rgb = mix(diffuseColor.rgb, rb, uRainbow * 0.72);
      }
      diffuseColor.rgb = mix(diffuseColor.rgb, uInk, gFace);
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), gHi);
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.42, 0.5), gBlush * 0.35);
    `)
    .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
      {
        vec3 vd = normalize(vViewPosition);
        float fr = 1.0 - clamp(dot(normal, vd), 0.0, 1.0);
        vec3 nr = normalize(vRest);
        float body = (1.0 - gFace);
        totalEmissiveRadiance += uGlow * (0.05 + 0.42 * pow(fr, 2.6) + 0.3 * smoothstep(-0.15, -0.95, nr.y)) * body * (1.0 - uRainbow * 0.9);
        vec3 rb = rainbowAt(nr, fr);
        // Saturated rim light adds life while the center stays see-through.
        totalEmissiveRadiance += rb * uRainbow * (0.3 * pow(fr, 1.7) + 0.035) * body;
        totalEmissiveRadiance += vec3(1.0) * gHi * 0.95;
      }
    `)
    .replace('#include <transmission_fragment>',
      THREE.ShaderChunk.transmission_fragment.replace(
        'material.transmission = transmission;',
        'material.transmission = transmission * (1.0 - gFace);'
      ));
  };

  return { material: slimeMat, face };
}
