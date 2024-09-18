//declare images
PImage bg;
PImage [] sprite = new PImage[8];
PImage log;
//declare variables
int frame;
int playerX, playerY;
int obstacleCount;
float logX, logY;
boolean jump = false;
void setup(){
  size(500, 389);
  //load images
  bg = loadImage("forest.jpg");
  log = loadImage("log.png");
  for (int i = 0; i < 8; i=i+1) {
    sprite[i] = loadImage("man" + i + ".png");
  }
  
  //set up variables
  frame = 0;
  playerX = 0;
  playerY = 160;
  obstacleCount = 5;
  logX = 500;
  logY = 320;
  
  //setup text
  textAlign(CENTER);
  textSize(30);
  fill(0,0, 255);
}


void draw(){
  backGroundScroll();
  drawLog();
  run();
  jump();
  collisionDetection();
  gameOver();
  
  
}

void gameOver(){
  if (frameCount > width * 6){
    noLoop();
    text("You made it through the forest!", width/2, height/2);
  }
}

void keyPressed(){
  if (key == ' '){
    jump = true;
  }
}

void backGroundScroll(){
  image(bg, 0-(frameCount%516), 0);
  image(bg, 450-(frameCount%516), 0);
}



void drawLog(){
  
  log.resize(50,0);
  image(log, logX-frameCount%(width+100), logY);
}

void run(){
  image(sprite[frame], playerX, playerY);
  frame = frameCount/5%8;
}

void jump(){
  if (jump){
    playerY-=2;
    if (playerY == 2){
      jump = false;
    }
  }else if (playerY !=160){
    playerY+=1;
  }
}

void collisionDetection(){
  print("Player x: " + playerX);
  println("Player y: " + (playerY+180));
  println("logX: " + (logX-frameCount%(width+100)));
  if (logX-frameCount%(width+100) <= playerX + 100 &&
        logX-frameCount%(width+100) > playerX && 
      logY < playerY+180){
        text("Sorry, you didn't make it.", width/2, height/2);
        noLoop();
      }
  
}
