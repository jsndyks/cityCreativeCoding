class Particle {

  // Creates a new particle with a random location and direction of movement.
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.prevX = this.x;
    this.prevY = this.y;
    this.direction = random(0, radians(360));
  }

  // Moves the particle after randomly modifying the direction of movement.
  move()
  {
    if ((this.x < 0) || (this.y < 0) || (this.x > width) || (this.y > height))
    {
      // Particle has moved off screen so reset it in new random location.
      this.x = random(0, width);
      this.y = random(0, height);
      this.prevX = this.x;
      this.prevY = this.y;
      this.direction = random(0, radians(360));
    } else
    {
      // Store previous position before we move particle.
      this.prevX = this.x;
      this.prevY = this.y;

      // Use noise() to change direction.
      const noiseScale = 0.05;
      this.direction = noise(noiseScale*this.x, noiseScale*this.y)*radians(360);

      // Move to new location based on new direction.
      this.x += cos(this.direction);
      this.y += sin(this.direction);
    }
  }
}
