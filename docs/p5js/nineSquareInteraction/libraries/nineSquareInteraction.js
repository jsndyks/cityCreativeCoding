
function setup() {
  createCanvas(800,100);
}


function draw() {
  background(250);
  
  for (let i=0; i<width; i+=100) {
    if (mouseX > i && mouseX <i+90) {
      fill(255,128,32);
    } else {
      fill(200);
    }
    rect(i+random(5,15),10+random(-5,5),80+random(-5,5),80);
  }
}
