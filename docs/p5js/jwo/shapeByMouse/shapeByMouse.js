function setup() {
  createCanvas(400, 200);
  fill(203, 118, 122);
}

function draw() {
  background(255, 236, 149);
  if (mouseX < width / 2) {
    ellipse(mouseX, mouseY, 80, 80);
  } else {
    rect(mouseX, mouseY, 80, 80);
  }
}
