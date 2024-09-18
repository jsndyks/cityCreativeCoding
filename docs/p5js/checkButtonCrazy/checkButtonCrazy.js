let x, y, size;
let isIn = false;    // -- is the mouse in the rect()?
let isOn = false;    // -- is the checkbutton on?
let isClicked = false;    // -- has the checkbutton been clicked??

let longText = "You see,\nyou can create\nstandard graphical\nuser interface\nelements\nif you must!\nIt's easy.\n  \nBut you're here\nto innovate.\n\nBe creative!";

function setup()
{
  createCanvas(400, 400);
  x = width/4;
  y = height/4;
  size=width/15;
  rectMode(CENTER);
  textSize(12);
}

function draw()
{
  background(250);

  fill(240);
  if (isIn) {
    fill(255, 128, 64);
  }
  if (isOn) {
    fill(255, 0, 0);
  }
  
  //if (mousePressed) {
  //  //strokeWeight(0.1);
  //stroke(64, 0);
  //} else {
  //  //strokeWeight(1);
  //stroke(64, 64);
  //}
  stroke(64, 64);



  rect(x, y, size, size);

  if (isOn) {
    fill(64, 200);
    rect(x, y, size*0.55, size*0.55);
    text("Craziness On", 5, 5+height/4);
  } else {
    if (isClicked) {
      fill(64, 200);
      text("Craziness Off", 5, 5+height/4);
    }
  }

  // -- show text if the button has never been clicked and is not being touched:
  if (!isClicked && !isIn) {
    fill(64, 200);
    text("Click Me!", width/3-10, 5+height/4);
  }

  // -- show the text and add some random dynamism:
  if (isOn) {
    text(longText, width/3, height/4);
    // -- random line action - left/right!
    stroke(255, 255, random(64, 240));
    line(0, random(0, height), width, random(0, height));
    stroke(255, random(64, 240), 255);
    line(0, random(0, height), width, random(0, height));
    // -- random line action - top/bot!
    stroke(random(192, 255), 128, 128);
    line(random(0, width), 0, random(0, width), height);
    stroke(128, random(192, 255), 128);
    line(random(0, width), 0, random(0, width), height);
  }
}

function mouseMoved()
{
  // -- is mouse position inside the rectangle?
  if  ((mouseX > x-size/2) && (mouseY >-size/2) && (mouseX < x+size/2) && (mouseY < y+size/2))
  {
    isIn = true;
  } else {
    isIn = false;
  }
}

function mouseClicked()
{
  // -- is mouse position inside the rectangle?
  if  ((mouseX > x-size/2) && (mouseY >-size/2) && (mouseX < x+size/2) && (mouseY < y+size/2))
  {
    // -- switch isON - shorthand is : isOn = !isOn
    if (isOn) {
      isOn = false;
    } else {
      isOn = true;
    }
  }
  isClicked = true;
}
