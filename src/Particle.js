export default class Particle {
  constructor(effect, x, y, color) {
    this.effect = effect;
    this.x = Math.random() * this.effect.width;
    this.y = Math.random() * this.effect.height;
    this.originX = Math.floor(x);
    this.originY = Math.floor(y);
    this.color = color;
    this.size = this.effect.gap;
    this.vx = 0;
    this.vy = 0;
    this.ease = document.getElementById('ease').value;
    this.dx = 0;
    this.dy = 0;
    this.distance = 0;
    this.force = 0.5;
    this.angle = 0;
    this.friction = document.getElementById('friction').value;

    document.getElementById('btn').addEventListener('click', (event) => this.warp());

    document
      .getElementById('friction')
      .addEventListener('change', (event) => (this.friction = event.target.value));
    document
      .getElementById('ease')
      .addEventListener('change', (event) => (this.ease = event.target.value));
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.size, this.size);
  }

  update() {
    this.dx = this.effect.mouse.x - this.x;
    this.dy = this.effect.mouse.y - this.y;
    this.distance = this.dx * this.dx + this.dy * this.dy;
    this.force = +this.effect.mouse.radius / this.distance;

    if (this.distance < this.effect.mouse.radius) {
      this.angle = Math.atan2(this.dy, this.dx);
      this.vx -= this.force * Math.cos(this.angle);
      this.vy -= this.force * Math.sin(this.angle);
    }

    this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
    this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
  }

  warp() {
    this.x = Math.random() * this.effect.width;
    this.y = Math.random() * this.effect.height;
  }
}
