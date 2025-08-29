function setup() {
  createCanvas(400, 400);
  fill(0, 0, 100);
  noStroke();
}

function draw() {
  background(255);
  const smoothness = 0.05; // Try changing this number between 0 and 1.
  const xPos = noise(frameCount * smoothness, 0) * width;
  const yPos = noise(frameCount * smoothness, 1) * height;
  circle(xPos, yPos, 50);
}
