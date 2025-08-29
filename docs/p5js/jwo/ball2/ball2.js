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

  if (position.x - radius < 0 && velocity.x < 0) {
    // Escaping to the left, start moving right.
    velocity.x = -1 * velocity.x;
  } else if (position.x + radius > width && velocity.x > 0) {
    // Escaping to the right, start moving left.
    velocity.x = -1 * velocity.x;
  }

  if (position.y - radius < 0 && velocity.y < 0) {
    // Escaping upwards, start moving down.
    velocity.y = -1 * velocity.y;
  } else if (position.y + radius > height && velocity.y > 0) {
    // Escaping downwards, start moving up.
    velocity.y = -1 * velocity.y;
  }
}
