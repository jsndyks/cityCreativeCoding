let x, y, size;
let isIn = false;    // -- is the mouse in the rect()?
let isOn = false;    // -- is the checkbutton on?

function setup()
{
  createCanvas(250, 250);
  x = width/4;
  y = height/4;
  size = width/15;
}

function draw()
{
  if (isOn) {
    // -- yellow if on!
    background(255, 255, 140);
  } else {
    // -- white if not!
    background(255);
  }

  // -- change colour to be used in rect based on status:
  if (isIn) {
    fill(255, 128, 64);
  } else if (isOn) {
    fill(255, 0, 0);
  } else {
    fill(240);
  }

  // -- the main rectangle - always shown :
  rect(x, y, size, size);
 
  fill(64, 200);
  // -- things to show based on status!
  if (isOn) {
    // -- middle rectangle and reminder text :
    rect(x+size*0.25, y+size*0.25, size*0.5, size*0.5);
    text("Remember to turn me off before you leave ...", 5, height-10);
    text("On", x+size*1.5, 15+height/4);
    text("🐁", x ,height/4-12);
  } else {
    text("Off", x+size*1.5, 15+height/4);
  }
}

function mouseMoved()
{
  // -- is mouse position inside the rectangle?
  if  ((mouseX > x/2) && (mouseY >y) && (mouseX < x+size) && (mouseY < y+size))
  {
    isIn = true;
  } else {
    isIn = false;
  }
}

function mouseClicked()
{
  // -- is mouse position inside the rectangle?
  if  ((mouseX > x/2) && (mouseY >y) && (mouseX < x+size) && (mouseY < y+size))
  {
    // -- switch isON - shorthand is : isOn = !isOn
    if (isOn) {
      isOn = false;
    } else {
      isOn = true;
    }
  }
}
