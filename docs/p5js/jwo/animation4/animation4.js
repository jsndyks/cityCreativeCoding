let xPosition, yPosition;
let red,green,blue;
 
function setup() {
  createCanvas(400,300);
  xPosition = 150;      // Initial position of rectangle in pixel units.
  yPosition = 130;
  red   = 203;
  green = 118;
  blue  = 122;
 
  strokeWeight(0.5);        // Create thin border around any shapes drawn.
  background(255,236,149);  // Clear the screen only once.
}
 
function draw()
{
  // Move position by a small random value
  xPosition = xPosition + random(-4,4);
  yPosition = yPosition + random(-4,4);

  // Change fill colour by a small random value
  red   = red +random(-10,10);
  green = green +random(-10,10);
  blue  = blue +random(-10,10);
 
  // Draw red rectangle with border and rounded edges.
  fill(red,green,blue);
  rect(xPosition,yPosition,90,50,20);
}
