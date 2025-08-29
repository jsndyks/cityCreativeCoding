const balls = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 100; i++) {
    balls.push(new Ball());
  }
}

function draw() {
  background(254, 244, 232); // Pale background.

  balls.forEach((b) => {
    b.move();
    b.draw();
  });
}
