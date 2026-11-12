import * as THREE from 'three';
import { paintThemeWall } from './theme-wall.js';
import { clamp } from '../core/math.js';

/**
 * The wall behind the counter is not 3D: it is painted onto a canvas
 * (tiles, mirror, faucet, bottle) and then blurred by repeated
 * down/up-sampling to fake a shallow depth of field.
 *
 * `paintWall` is kept verbatim from the original build; it is called on
 * every resize with the wall size in world units.
 */
export function createWall(scene) {
  let theme = 'bathroom', lastWidth = 20, lastHeight = 14;
  const wallCanvas = document.createElement('canvas');
  const wallTex = new THREE.CanvasTexture(wallCanvas);
  wallTex.colorSpace = THREE.SRGBColorSpace;
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: wallTex, toneMapped: false }));
  scene.add(wall);

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }

  function paintWall(wallW, wallH) {
    lastWidth = wallW; lastHeight = wallH;
    const W = 1600, s = W / wallW, H = Math.round(clamp(wallH * s, 300, 3200));
    const X = (xw) => (xw + wallW / 2) * s;   // world x → px
    const Y = (yw) => H - yw * s;             // height above the counter → px
    const big = document.createElement('canvas'); big.width = W; big.height = H;
    const g = big.getContext('2d');
    // base wall
    let gr = g.createLinearGradient(0, Y(9), 0, H);
    gr.addColorStop(0, '#E3E6E9'); gr.addColorStop(0.6, '#EEF0F0'); gr.addColorStop(1, '#F5F5F4');
    g.fillStyle = gr; g.fillRect(0, 0, W, H);
    // window light from the right
    gr = g.createRadialGradient(X(9), Y(4), 0, X(9), Y(4), 9 * s);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, W, H);
    // large-format tiles
    g.strokeStyle = 'rgba(160,166,174,.26)'; g.lineWidth = Math.max(2, 0.03 * s);
    const tw = 2.4 * s, th = 1.2 * s;
    let row = 0;
    for (let y = H; y > -th; y -= th, row++) {
      g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke();
      for (let x = (row % 2) * tw * 0.5 + (X(0) % tw); x < W; x += tw) { g.beginPath(); g.moveTo(x, y); g.lineTo(x, y - th); g.stroke(); }
    }
    // mirror
    const mx = X(-4.2), mw = 7.6 * s, my = Y(8.5), mh = 7.4 * s, mr = 0.7 * s, f = 0.12 * s;
    g.save();
    g.shadowColor = 'rgba(0,0,0,.1)'; g.shadowBlur = 0.5 * s; g.shadowOffsetY = 0.12 * s;
    roundRect(g, mx, my, mw, mh, mr); g.fillStyle = '#CFD6DC'; g.fill();
    g.restore();
    roundRect(g, mx + f, my + f, mw - 2 * f, mh - 2 * f, mr - f);
    gr = g.createLinearGradient(mx, my, mx + mw, my + mh);
    gr.addColorStop(0, '#DCE3E9'); gr.addColorStop(1, '#ECF0F3');
    g.fillStyle = gr; g.fill();
    g.save(); roundRect(g, mx + f, my + f, mw - 2 * f, mh - 2 * f, mr - f); g.clip();
    g.fillStyle = 'rgba(255,255,255,.95)'; g.fillRect(mx + mw * 0.6, my + mh * 0.1, mw * 0.22, mh * 0.6);
    g.fillStyle = 'rgba(160,170,182,.32)'; g.fillRect(mx + mw * 0.14, my + mh * 0.18, mw * 0.045, mh * 0.82);
    g.fillStyle = 'rgba(205,212,220,.55)'; g.fillRect(mx, my + mh * 0.8, mw, mh * 0.2);
    g.restore();
    // soft chrome faucet, back left
    const fx = X(-2.6);
    g.fillStyle = '#C6CBD0'; roundRect(g, fx - 0.09 * s, Y(0.95), 0.18 * s, 0.95 * s, 0.08 * s); g.fill();
    g.fillStyle = '#D3D7DB'; roundRect(g, fx - 0.09 * s, Y(0.95), 0.62 * s, 0.14 * s, 0.07 * s); g.fill();
    g.fillStyle = 'rgba(255,255,255,.85)'; g.fillRect(fx - 0.04 * s, Y(0.9), 0.035 * s, 0.85 * s);
    // bottle + cotton pads on the right
    const bx = X(4.6), bh = 1.9 * s, bw = 0.62 * s;
    gr = g.createLinearGradient(bx - bw / 2, 0, bx + bw / 2, 0);
    gr.addColorStop(0, 'rgba(150,196,228,.8)'); gr.addColorStop(0.5, 'rgba(214,234,247,.9)'); gr.addColorStop(1, 'rgba(140,186,220,.8)');
    g.fillStyle = gr; roundRect(g, bx - bw / 2, H - bh, bw, bh, 0.12 * s); g.fill();
    g.fillStyle = '#FFFFFF'; roundRect(g, bx - bw * 0.38, H - bh * 0.78, bw * 0.76, bh * 0.36, 0.05 * s); g.fill();
    g.fillStyle = '#F7F7F7'; roundRect(g, bx - bw * 0.3, H - bh - 0.24 * s, bw * 0.6, 0.26 * s, 0.06 * s); g.fill();
    for (let i = 0; i < 7; i++) {
      g.fillStyle = i % 2 ? '#EFEFED' : '#FFFFFF';
      g.beginPath(); g.ellipse(X(5.7), H - 0.06 * s - i * 0.07 * s, 0.42 * s, 0.07 * s, 0, 0, Math.PI * 2); g.fill();
    }
    // contact shadow along the counter
    gr = g.createLinearGradient(0, Y(0.5), 0, H);
    gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(40,44,50,.12)');
    g.fillStyle = gr; g.fillRect(0, Y(0.5), W, 0.5 * s);

    if (theme !== 'bathroom') paintThemeWall(g, { id: theme, W, H, s, X, Y });
    // blur by repeated down/up sampling (works in every browser)
    const steps = theme === 'fire' ? [0.5, 0.24] : [0.5, 0.25, 0.125, 0.07];
    let src = big;
    for (const s of steps) {
      const c = document.createElement('canvas');
      c.width = Math.max(8, Math.round(W * s)); c.height = Math.max(8, Math.round(H * s));
      const cx = c.getContext('2d'); cx.imageSmoothingQuality = 'high';
      cx.drawImage(src, 0, 0, c.width, c.height); src = c;
    }
    for (const s of theme === 'fire' ? [0.5] : [0.14, 0.28, 0.5]) {
      const c = document.createElement('canvas');
      c.width = Math.round(W * s); c.height = Math.round(H * s);
      const cx = c.getContext('2d'); cx.imageSmoothingQuality = 'high';
      cx.drawImage(src, 0, 0, c.width, c.height); src = c;
    }
    wallCanvas.width = src.width; wallCanvas.height = src.height;
    wallCanvas.getContext('2d').drawImage(src, 0, 0);
    wallTex.needsUpdate = true;
  }

  return { wall, wallTex, paint: paintWall, setTheme(id) { theme = id; paintWall(lastWidth, lastHeight); } };
}
