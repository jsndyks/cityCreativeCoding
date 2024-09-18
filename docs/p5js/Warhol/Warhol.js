var img;

function preload(){
  img = loadImage("data/face.png");
}

function setup() {
  createCanvas(614, 684);
}

function draw() {  
  tint(255, 0, 255);
  image(img, 0, 0);
  tint(0, 255, 0);
  image(img, width/2, 0);
  tint(255, 255, 0);
  image(img, 0, height/2);
  tint(0, 255, 255);
  image(img, width/2, height/2);
  filter(POSTERIZE, 5);
  filter(BLUR, mouseX/100)
}
