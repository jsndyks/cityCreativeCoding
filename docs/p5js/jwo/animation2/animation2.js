let xPosition,yPosition;

function setup() {
  createCanvas (400,300);
  xPosition = 150;      // Initial position of rectangle in pixel units.
  yPosition = 130;
}
 
function draw()
{
  background(255,236,149);
 
  // Move position by a small random value
  xPosition = xPosition + random(-4,4);
  yPosition = yPosition + random(-4,4);
 
  // Draw red rectangle with rounded edges.
  noStroke();
  fill(203,118,122);
  rect(xPosition,yPosition,90,50,20);
}
