var img; 

function preload(){
  img = loadImage("data/face.png");
}

function setup() {
  createCanvas(307, 342);
  image(img, 0, 0);
  noStroke();
  fill(0, 0, 255, 20);
}

function draw() { 
}

function mouseClicked() {
  ellipse(mouseX, mouseY, 10, 10);
}
