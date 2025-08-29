class Ball {
  // Initialises the ball's state.
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(random(-3, 3), random(-3, 3));
    this.radius = 15;
    this.colour = color(214, 93, 69);
  }

  // Draws the ball at its current position.
  draw() {
    noStroke();
    fill(this.colour);
    circle(this.position.x, this.position.y, this.radius * 2);
  }

  // Moves the ball according to its current velocity.
  move() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.x - this.radius < 0 && this.velocity.x < 0) {
      // Escaping to the left, start moving right.
      this.velocity.x = -1 * this.velocity.x;
    } else if (this.position.x + this.radius > width && this.velocity.x > 0) {
      // Escaping to the right, start moving left.
      this.velocity.x = -1 * this.velocity.x;
    }

    if (this.position.y - this.radius < 0 && this.velocity.y < 0) {
      // Escaping upwards, start moving down.
      this.velocity.y = -1 * this.velocity.y;
    } else if (this.position.y + this.radius > height && this.velocity.y > 0) {
      // Escaping downwards, start moving up.
      this.velocity.y = -1 * this.velocity.y;
    }
  }
}
