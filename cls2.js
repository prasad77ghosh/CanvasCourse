// canvas animation tutorial

const canvas = document.getElementById("canvas1");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particleArray = [];
let hue = 0; //for color

function windowResize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", windowResize);

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("click", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  // drawCircle();
  for (let i = 0; i < 10; i++) {
    particleArray.push(new Particle());
  }
});

canvas.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  // drawCircle();
  for (let i = 0; i < 10; i++) {
    particleArray.push(new Particle());
  }
});

// function drawCircle() {
//   ctx.beginPath();
//   ctx.fillStyle = "#fff";
//   // ctx.strokeStyle = "#fff";
//   // ctx.lineWidth = 5;
//   ctx.arc(mouse.x, mouse.y, 20, 0, Math.PI * 2);
//   ctx.fill();
// }

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    // this.x = Math.random() * canvas.width;
    // this.y = Math.random() * canvas.height;
    this.size = Math.random() * 15 + 1;
    this.speedX = Math.random() * 4 - 1.5;
    this.speedY = Math.random() * 4 - 1.5;
    this.color = 'hsl(' + hue + ',100%, 50%)';
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) {
      this.size -= 0.1;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    // ctx.strokeStyle = "#fff";
    // ctx.lineWidth = 5;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// function init() {
//   for (let i = 0; i < 100; i++) {
//     particleArray.push(new Particle());
//   }
// }

// init();

function handleParticle() {
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
    particleArray[i].draw();

    if (particleArray[i].size <= 0.3) {
      particleArray.splice(i, 1);
      i--;
    }
  }
}

function animate() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  handleParticle();

  hue+=5;
  requestAnimationFrame(animate); // here it called function recursevly;
}

animate();
