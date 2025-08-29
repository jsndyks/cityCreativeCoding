let screenPos;

function setup() {
  createCanvas(400, 400);
  stroke(150, 74, 50);
  fill(150, 74, 50);
  strokeWeight(6);
  // p5.js uses createVector(x,y) rather than new PVector(x,y)
  screenPos = createVector(width / 2, height / 2);
}

function draw() {
  background(243, 142, 45);
  circle(screenPos.x, screenPos.y, 12);
  line(screenPos.x, screenPos.y, mouseX, mouseY);
}

function mousePressed() {
  screenPos.x = mouseX;
  screenPos.y = mouseY;
}
