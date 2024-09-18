// -- global variable - used to count keypresses and position text
let p = 0;

function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(18);
  fill(64);
}

// -- do nothing in the draw loop for now!
function draw() {}

function keyPressed() {
  p+=12; // -- add 12 to p each time
  // -- put the char held in 'key' at a screen position
  // --   that increases in x and y with each key press
  text(key,p%width, 100 + 24*int(p/width));
  // -- the above just calculates a position for the text as x increases
  // -- use println() to print out the values to the console if you like\
  // -- remove '/width' and see what happens as you get to the right hand side!
}
