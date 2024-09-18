// -- global variables describe system state:
let clearScreen = false;  // -- do we clear the screen?
let addText = false;       // -- do we add text?
let isRed = false;       // -- do we make text red?
let isYellow = false;       // -- do we make background yellow?

// -- set up the things that don't change :
function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(18);
}

// -- do things in here based upon system state!
function draw() {

  // -- check whether to make text red:
  if (isRed) {
    // -- set fill to red:
    fill(255, 0, 0);
    isRed = false;
  } else {
    fill(64);
  }

  // -- check whether to add text:
  if (addText) {
    // -- add text at the mouse position:
    text(key, mouseX, mouseY);
    addText = false;
  }

  // -- check whether to clear screen:
  if (clearScreen) {
    if (isYellow) {
      // -- clear the screen: yellow!
      background(255, 255, 0);
      isYellow = false;
    } else {
      // -- clear the screen: random light grey!
      background(int(random(180, 240)));
    }
    // -- reset system state:
    clearScreen = false;
  }
}

// -- detect things in here that establish and record system state:
function keyPressed() {
  // -- set variable to record current state:
  addText = true;

  // -- set variable to record current state:
  if (key == 'r' || key =='R') {
    isRed = true;
  }
}

// -- detect things in here that establish and record system state:
function mouseClicked() {
  // -- set variable to record current state:
  clearScreen = true;
}

// -- detect things in here that establish and record system state:
function mouseMoved() {
  // -- set variable to record current state:
  if (mouseX>width/2) {
    isYellow = true;
  } else {
    isYellow = false;
  }
}
