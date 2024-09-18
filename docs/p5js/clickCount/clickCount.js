let clickCount = 0;

function setup()
{
  createCanvas(300, 300);
  textSize(72);
  fill(200);
  textAlign(CENTER);
}

function draw() {
  if (clickCount%10 == 2) {
    background(254, 64, 32);
  } else if (clickCount > 10) {
    background(254, 244, 232);
  } else {
    background(254, 232, 134);
  }
  fill(0);
  text(clickCount, width/2, height/2);
}

function mouseClicked() {
  clickCount++;
}
