class Ball {
  // Initialises the ball's state.
  constructor(diameter) {
    this.diameter = diameter;
    this.position = createVector(
      random(diameter, width - diameter),
      random(diameter, height - diameter)
    );
    this.colour = color(30 + diameter * 4, diameter * 2, diameter);
    this.velocity = createVector(
      random(-0.001, 0.001) * pow(diameter, 2),
      random(-0.001, 0.001) * pow(diameter, 2)
    );
  }

  draw() {
    noStroke();
    fill(this.colour);
    circle(this.position.x, this.position.y, this.diameter);
  }

  move() {
    // Make balls wrap around display.
    if (this.position.x < -this.diameter) {
      this.position.x = width + this.diameter;
    } else if (this.position.x > width + this.diameter) {
      this.position.x = -this.diameter;
    }
    if (this.position.y < -this.diameter) {
      this.position.y = height + this.diameter;
    } else if (this.position.y > height + this.diameter) {
      this.position.y = -this.diameter;
    }

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}
