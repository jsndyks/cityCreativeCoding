function setup() {
  createCanvas(255, 300);
}

function draw() {
  
  var alpha = round(mouseX*255 / width);

  background(255);
  noStroke();
  fill(255, 0, 0);
  rect(30, height/4, 140, 100);
  fill(0, 0, 255, mouseX);
  rect(70, 110, 140, 100);
  fill(0);
  textSize(20);
  textAlign(CENTER);

  text("alpha = " + (mouseX < 255 ? mouseX : 255), width/2, height-30);
  text("rgb(0,0,255," + alpha +")", 120, 230);
}
