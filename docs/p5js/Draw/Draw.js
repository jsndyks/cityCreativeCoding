var img;

function preload() {
  img = loadImage("data/face.png");

}
function setup() {
 createCanvas(307, 342);
 
 image(img,0,0);
 noStroke();
 fill(0);

}

function draw() {

}

function mouseDragged(){
 ellipse(mouseX, mouseY, 5, 5); 
}
