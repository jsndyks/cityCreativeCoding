let rect1, rect2;    // The two rectangles to display.

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textSize(16);

  rect1 = new MyRectangle(120, 100, 160, 130);
  rect2 = new MyRectangle(100, 100, 90, 75);
}

function draw() {
  background(252, 245, 233);
  noStroke();

  // Update one of the rectangles with the current mouse position
  rect2.xPos = mouseX - rect2.w/2;
  rect2.yPos = mouseY - rect2.h/2;

  // Draw both rectangles.
  if (rect1.overlapsWith(rect2))
  {
    fill(100, 50, 45);
  } else
  {
    fill(200, 103, 97);
  }

  rect(rect1.xPos, rect1.yPos, rect1.w, rect1.h);
  fill(255);
  text(nfc(rect1.getArea(), 0), rect1.xPos+rect1.w/2, rect1.yPos+rect1.yPos/2);

  fill(177, 199, 199);
  rect(rect2.xPos, rect2.yPos, rect2.w, rect2.h);
}
