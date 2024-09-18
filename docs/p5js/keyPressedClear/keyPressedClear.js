// -- set up the things that don't change ...

function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(18);
  fill(64);
}

// -- nothing in here for now!
function draw() {}

function keyPressed() {
  if (key == ' ') {  // -- change the key that is pressed to clear
    background(240); // -- change the background colour used
  } else {
    // -- put the value of 'key' in a random position:
    text(key, random(20, width-20), random(20, height-20));
  }
}
