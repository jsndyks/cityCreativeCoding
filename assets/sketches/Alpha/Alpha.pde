void setup(){
  size(255, 300);  
}

void draw(){
  background(255);
  noStroke();
  fill(255, 0, 0);
  rect(30, height/4, 140, 100);
  fill(0, 0, 255, mouseX);
  rect(70, 110, 140, 100);
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("alpha = " + mouseX, width/2, height-30);
}
