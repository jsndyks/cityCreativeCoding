const balls = [];

function setup() {
  createCanvas(400, 300);
  for (let i = 0; i < 40; i++) {
    balls.push(new Ball());
  }
}

function draw() {
  background(254, 244, 232);
  balls.forEach((ball) => {
    ball.draw();
    ball.move();
  });
}
