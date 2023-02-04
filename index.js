import Effect from './src/Effect.js';

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const effect = new Effect(canvas.width, canvas.height);
effect.init(ctx);
effect.draw(ctx);
effect.update();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  effect.draw(ctx);
  effect.update();
  requestAnimationFrame(animate);
}

animate();
