function setup() {
  createCanvas(400, 300);
  background(247, 239, 218);

  // Initialise a single particle object.
  particle= new Particle();
}


function draw() {
  // Draw and move the particle.
  line(particle.prevX, particle.prevY, particle.x, particle.y);
  particle.move();
}
