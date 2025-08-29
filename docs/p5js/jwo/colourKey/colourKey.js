let r, g, b;

function setup() {
  createCanvas(200, 200);
  r = 0;
  g = 0;
  b = 0;
}

function draw() {
  background(254, 232, 134);
  fill(r, g, b);
  rect(50, 50, 100, 100);
}

function keyPressed() {
  r = 0;
  g = 0;
  b = 0;

  if (key == "r") {
    r = 200;
  } else if (key == "g") {
    g = 200;
  } else if (key == "b") {
    b = 255;
  }
}
