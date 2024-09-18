// -- set up the things that don't change :
function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(18);
  fill(64);
}

// -- do nothing - for now!
function draw() {
}

function keyPressed() {
  // -- add text at the text position:
  text(key, mouseX, mouseY);
}

function mouseClicked() {
  // -- clear the screen: random light grey!
  background(int(random(180,240)));
}
