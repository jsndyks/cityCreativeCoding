const balls = [];

function setup() {
  createCanvas(400, 400);
  const NBALLS = 2000;
  const rnds = [];

  for (let i = 0; i < NBALLS; i++) {
    rnds.push(random(1));
  }
  rnds.sort();

  for (let i = 0; i < NBALLS; i++) {
    if (rnds[i] < 0.94) {
      balls.push(new Ball(3 + 10 * rnds[i]));
    } else if (rnds[i] < 0.997) {
      balls.push(new Ball(10 + 10 * rnds[i]));
    } else if (rnds[i] < 0.998) {
      balls.push(new Ball(25 + 10 * rnds[i]));
    } else {
      balls.push(new Ball(45 + 10 * rnds[i]));
    }
  }
}

function draw() {
  background(0, 0, 20);
  balls.forEach((ball) => {
    ball.move();
    ball.draw();
  });
}
