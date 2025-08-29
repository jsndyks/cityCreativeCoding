let ball1;

function setup() {
  createCanvas(400, 300);
  ball1 = new Ball();
}

function draw() {
  background(254, 244, 232);
  ball1.draw();
  ball1.move();
}
