let option;
const w = 400;
const h = 400;

function setup() {
  createCanvas(w, h, WEBGL);
  smooth(8);
  noStroke();
  fill(255, 0, 0);
  option = 0;
}

function draw() {
  background(255);
  push();
  if (option === 0) {
    noLights();
  } else if (option === 1) {
    lights();
  } else if (option === 2) {
    // custom lighting
    specularMaterial(200, 20, 20);
    specularColor(100, 100, 100);
    shininess(85);
    ambientLight(150);
    const hw = w / 2;
    const hh = h / 2;
    directionalLight(
      255,
      255,
      255,
      (-1 * (mouseX - hw)) / hw,
      (-1 * (mouseY - hh)) / hh,
      -1
    );
  }
  sphere(150);
  pop();
}
function mouseClicked() {
  option++;
  if (option > 2) {
    option = 0;
  }
}
