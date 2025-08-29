const clickedPoints = [];

function setup() {
  createCanvas(400, 400);
  stroke(150, 74, 50);
  fill(150, 74, 50);
  strokeWeight(6);
  clickedPoints.push(createVector(width / 2, height / 2));
}

function draw() {
  background(243, 142, 45);

  clickedPoints.forEach((p) => {
    circle(p.x, p.y, 12);
    line(p.x, p.y, mouseX, mouseY);
  });
}

function mousePressed() {
  clickedPoints.push(createVector(mouseX, mouseY));
}
