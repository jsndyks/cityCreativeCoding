let position;
let velocity;
let radius;
let colour;

function setup() {
  createCanvas(400, 300);

  position = createVector(width / 2, height / 2);
  velocity = createVector(random(-2, 2), random(-2, 2));
  radius = 15;
  colour = color(214, 93, 69);
}

function draw() {
  background(254, 244, 232);

  noStroke();
  fill(colour);
  circle(position.x, position.y, 2 * radius);

  position.x = position.x + velocity.x;
  position.y = position.y + velocity.y;
}
