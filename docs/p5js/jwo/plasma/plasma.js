const w = 320;
const h = 240;
let d;
function setup() {
  createCanvas(w, h);
  d = pixelDensity();
  frameRate(10);
}

function draw() {
  loadPixels();

  let i = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      for (let pd = 0; pd < d * d; pd++) {
        pixels[i + 0] = int(255 * (x / w));
        pixels[i + 1] = int(255 * (y / h));
        pixels[i + 2] = int(127.5 + 127.5 * sin(millis() / 1000));
        pixels[i + 3] = 255;
        i += 4;
      }
    }
  }
  updatePixels();
}
