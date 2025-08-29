function setup() {

  createCanvas(400, 300);

  // Initialise 500 particle objects.
  particles = [];
  for (let i=0; i<500; i++) {
    particles.push(new Particle());
  }

  // Use Hue Saturation Brightness colour mode
  colorMode(HSB, 1, 1, 1);
  background(0.12, 0.11, 0.95);
}


function draw() {
  // Draw and move each of the particles.
  strokeWeight(0.2);
  particles.forEach((p) => {
    stroke(noise(0.04*p.x,0.04*p.y)*1.4,0.7,0.6);
    line(p.prevX, p.prevY, p.x, p.y);
    p.move();
  }
  )
}
