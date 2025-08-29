class Ball {

  constructor() {
    // Initialise the state of the ball with some random values.
    this.diameter = random(10, 40);
    this.x = random(this.diameter, width-this.diameter);
    this.y = random(this.diameter, height-this.diameter);
    this.colour = color(random(170, 250), random(70, 130), random(40, 80));
    this.dx = random(-2, 2);
    this.dy = random(-2, 2);
  }

  draw()
  {
    noStroke();
    fill(this.colour);
    circle(this.x, this.y, this.diameter);
  }

  move()
  {
    // Make balls bounce off edge.
    if (this.x <= this.diameter/2) {
      this.dx = abs(this.dx);
    }
    if (this.y <= this.diameter/2) {
      this.dy = abs(this.dy);
    }
    if (this.x >= width-this.diameter/2) {
      this.dx = -abs(this.dx);
    }
    if (this.y >= height-this.diameter/2) {
      this.dy = -abs(this.dy);
    }

    this.x += this.dx;
    this.y += this.dy;
  }

  hasCollidedWith(anotherBall)
  {
    return dist(this.x, this.y, anotherBall.x, anotherBall.y) <= (this.diameter+anotherBall.diameter)/2;
  }

  bounce(anotherBall)
  {
    // Calculate bounce angle of the two balls.
    const collisionAngle = atan2(anotherBall.y-this.y, anotherBall.x-this.x);
    const collisionX = cos(collisionAngle);
    const collisionY = sin(collisionAngle);
    const collisionXTangent = cos(collisionAngle+HALF_PI);
    const collisionYTangent = sin(collisionAngle+HALF_PI);
    const collisionPx = this.x + this.diameter/2*collisionX;
    const collisionPy = this.y + this.diameter/2*collisionY;

    const v1 = sqrt(this.dx*this.dx + this.dy*this.dy);
    const v2 = sqrt(anotherBall.dx*anotherBall.dx+anotherBall.dy*anotherBall.dy);

    const d1 = atan2(this.dy, this.dx);
    const d2 = atan2(anotherBall.dy, anotherBall.dx);

    const v1x = v1*cos(d1-collisionAngle);
    const v1y = v1*sin(d1-collisionAngle);

    const v2x = v2*cos(d2-collisionAngle);
    const v2y = v2*sin(d2-collisionAngle);

    this.dx = collisionX*v2x + collisionXTangent*v1y;
    this.dy = collisionY*v2x + collisionYTangent*v1y;

    this.x = collisionPx - 0.5*this.diameter*collisionX;
    this.y = collisionPy - 0.5*this.diameter*collisionY;

    anotherBall.dx = collisionX*v1x + collisionXTangent*v2y;
    anotherBall.dy = collisionY*v1x + collisionYTangent*v2y;

    anotherBall.x = collisionPx + 0.5*anotherBall.diameter*collisionX;
    anotherBall.y = collisionPy + 0.5*anotherBall.diameter*collisionY;
  }
}
