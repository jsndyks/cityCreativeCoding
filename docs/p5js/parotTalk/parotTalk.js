// -- global variables : Change these in turn, and in combination.
// -- Use PAROT talk to learn their effects.

 let mouseXDiv = 1;           // <-- change number that mouseY is divided by
 let mouseYDiv = 1;           // <-- change number that mouseX is divided by
 let rectRatio  = 0.5;        // <-- change the aspect ratio of the rectangle
 let widthFactor = 2;
 let framesPerSecond = 60;    // <-- change frameRate from 1-60
 
 
function setup() {
  createCanvas(400, 300);
  background(255, 236, 149);  // <-- change each of the colour components between 0 and 255
  fill(203, 118, 122);        // <-- change each of the colour components between 0 and 255
}


function draw() {  
  frameRate(framesPerSecond);  // -- sets number of frames per second.
  
  // -- calculate position and dimensions of rectangle depending on global variables:
  let x = mouseX / mouseXDiv;
  let y = mouseY / mouseYDiv;
  let rectWidth = frameCount / widthFactor;
  let rectHeight = rectWidth * rectRatio;

  // -- draw a rectangle at x,y with the specified height and width:
  rect(x,y, rectWidth, rectHeight);
}
