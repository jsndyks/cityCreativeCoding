function setup() {
  createCanvas(400, 400);
  fill(0, 0, 100);
  noStroke();
}

function draw() {
  background(255);
  const xPos = random(0, width);
  const yPos = random(0, height);
  circle(xPos, yPos, 50);
}
