let img;
const w = 500;
const h = 500;

function preload() {
  img = loadImage("lovelace.jpg");
}

function setup() {
  createCanvas(w, h, WEBGL);
}

function draw() {
  background(255);
  const s = 16; // Sample rate of pixels (s=8 -> 1 in 8 pixels shown)

  translate(-w / 2, -h / 2, -400);
  rotateY(radians(30));

  for (let y = 0; y < img.height; y += s) {
    for (let x = 0; x < img.width; x += s) {
      const pixelColour = img.get(x, y);
      fill(pixelColour);

      push();
      const f = map(mouseY, 0, height, -5, 5);
      const a = brightness(pixelColour);
      translate(x, y, f * a);
      rotateY(a * radians(millis() / 500.0));
      box(int(s * 0.75));
      pop();
    }
  }
}
