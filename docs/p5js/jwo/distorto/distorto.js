let img;
const w = 640;
const h = 480;
let showTexture;

function preload() {
  img = loadImage("lovelace.jpg");
}

function setup() {
  createCanvas(w, h, WEBGL);
  stroke(255);
  stroke(0);
  strokeWeight(0.5);
  showTexture = true;
}

function draw() {
  background(255);

  push();
  translate(-w / 2, 0, -200);
  rotateX(radians(mouseY));
  translate(0, -h / 2, 0);

  const d = 16; // spacing of vertices
  const s = 0.003;
  const t = millis() / 5000.0; // Deformation rate

  for (let x = 0; x < w; x += d) {
    for (let y = 0; y < h; y += d) {
      const z1 = (noise(x * s, y * s, t) - 0.5) * w;
      const z2 = (noise((x + d) * s, y * s, t) - 0.5) * w;
      const z3 = (noise((x + d) * s, (y + d) * s, t) - 0.5) * w;
      const z4 = (noise(x * s, (y + d) * s, t) - 0.5) * w;

      beginShape(TRIANGLES);
      textureMode(NORMAL);
      if (showTexture) {
        texture(img);
      }
      vertex(x, y, z1, x / w, y / h);
      vertex(x + d, y, z2, (x + d) / w, y / h);
      vertex(x + d, y + d, z3, (x + d) / w, (y + d) / h);

      vertex(x + d, y + d, z3, (x + d) / w, (y + d) / h);
      vertex(x, y + d, z4, x / w, (y + d) / h);
      vertex(x, y, z1, x / w, y / h);
      endShape();
    }
  }
  pop();
}

function keyPressed() {
  if (key == " ") {
    showTexture = !showTexture;
  }
}
