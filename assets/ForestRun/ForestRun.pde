PImage [] sprite = new PImage[8];
PImage forest, stump, pickup;
int spriteFrame = 0, score = 0, padding = 200;
PVector playerPosition = new PVector(0, 250);
PVector playerVelocity = new PVector(400, 0);
PVector gravity = new PVector(0, 2000);

boolean playerJumping = false, gameOver = false;

int framerate = 24;
int numPickups = 100;
int numStumps = 10;
PVector [] stumpLocations = new PVector[numStumps];
PVector [] pickupLocations = new PVector[numPickups];
boolean [] pickupValid = new boolean[100];

void setup() {
  // Load images
  size(1000, 480);
  for (int i = 0; i < 8; i++)
    sprite[i] = loadImage("man" + i + ".png");

  forest = loadImage("forest.jpg");
  stump = loadImage("stump.png");
  pickup = loadImage("yellowPickup.png");

  frameRate(framerate);

  // Set location of obstacles and pickups
  for (int i = 0; i < numStumps; i++)
    stumpLocations[i] = new PVector(i*1000 - random(500), 325);

  for (int i = 0; i < numPickups; i++) {
    PVector p = new PVector(random(10000), 350 + random(50));
    pickupLocations[i] = p;
    pickupValid[i] = true;
  }
}

void draw() {
  // This is a standard "game loop" -- update the game objects, then render the scene
  update();
  render();
}

void update() {
  // Update all game objects
  float dt = 1.0 / framerate;
  playerPosition = PVector.add(playerPosition, PVector.mult(playerVelocity, dt));

  if (playerJumping) {
    playerVelocity = PVector.add(playerVelocity, PVector.mult(gravity, dt));
    if (playerPosition.y > 250) {
      playerPosition.y  = 250;
      playerVelocity.y  = 0;
      playerJumping = false;
    }
  }
  runCollisionDetection();
}

void render() {
  // Render all game objects
  drawBackground();
  drawPickups();
  drawPlayer();
  drawStumps();

  if (playerPosition.x > 10000)
    gameOver = true;

  if (gameOver) {
    noLoop();
    text("Game Over", 320, 240);
  }

  text("Score = " + score, 10, 10);
}

// Bounding box collision detection.  Use a positive value (like 200) for padding to relax criteria
boolean collisionDetection(PVector p1, PImage i1, PVector p2, PImage i2, int padding) {
  PVector h1 = new PVector(i1.width / 2, i1.height / 2);
  PVector h2 = new PVector(i2.width / 2, i2.height / 2);
  PVector c1 = PVector.add(p1, h1);
  PVector c2 = PVector.add(p2, h2);
  PVector v = PVector.sub(c1, c2);
  if (abs(v.x) * 2 < (i1.width + i2.width - padding) &&
    abs(v.y) * 2 < (i1.height + i2.height))
    return true;
  else
    return false;
}

void drawPickups() {
  for (int i = 0; i < numPickups; i++) {
    if (pickupValid[i])
      image(pickup, pickupLocations[i].x-playerPosition.x, pickupLocations[i].y);
  }
}

// As player moves right, the background shifts left
void drawBackground() {
  int x = - ((int)playerPosition.x) % forest.width;
  image(forest, x, 0);
  image(forest, x+forest.width, 0);
  image(forest, x+2*forest.width, 0);
}

void drawPlayer() {
  image(sprite[spriteFrame], 0, playerPosition.y);
  if (playerJumping == false) {
    if (frameCount % 2 == 0)
      spriteFrame = (spriteFrame + 1) % 8;
  } else {
    spriteFrame = 1; // Player jumping -- just use image 1
  }
}

void drawStumps() {
  for (int i = 0; i < numStumps; i++)
    image(stump, stumpLocations[i].x-playerPosition.x, stumpLocations[i].y);
}

void runCollisionDetection() {

  for (int i = 0; i < numStumps; i++) {
    if (collisionDetection(stumpLocations[i], stump, playerPosition, sprite[spriteFrame], padding)) {
      gameOver = true;
    }
  }

  for (int i = 0; i < numPickups; i++) {
    if (pickupValid[i] == true && collisionDetection(pickupLocations[i], pickup, playerPosition, sprite[spriteFrame], padding)) {
      score += 1;
      pickupValid[i] = false;
    }
  }
}

void keyPressed() {
  if (key == ' ') {
    playerJumping = true;
    playerVelocity.y -= 1000;
  }
}
