function setup() {

  createCanvas(400, 300);

  // Initialise 500 particle objects.
  particles = [];
  for (let i=0; i<500; i++) {
    particles.push(new Particle());
  }
  background(247, 239, 218);
}


function draw() {
  // Draw and move each of the particles.
  particles.forEach((p) => {
    line(p.prevX, p.prevY, p.x, p.y);
    p.move();
  }
  )
}
