// -- global variables to store the position of the text to be added:
let textX, textY;

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
  text(key, textX, textY);
}

function mouseClicked() {
  if (mouseButton == LEFT) {
    // -- left button - update text position:
    textX = mouseX;
    textY = mouseY;
  } else {
    // -- right button - clear the screen:
    background(220);
  }
}
