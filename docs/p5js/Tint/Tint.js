var img;

function preload(){
  img = loadImage("data/Holiday.png");
}

function setup() {
  createCanvas(640, 580);
}

function draw() {
  var tint_value = (round(mouseX*255 / width)<256 ? round(mouseX*255 / width) : 255);
  background(255);
 
  tint(tint_value);
  image(img, 0, 0, width-100, height-100);
 
  textSize(16);
  fill(0);
  text("tint(" + tint_value + ");", 200, 500);
  text("image(img, 0, 0);", 200, 520);
}
