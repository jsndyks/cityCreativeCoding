// -- use a StringDict to relate one String (a letter) to another (a set of coordinates):
// --> https://processing.org/reference/StringDict.html
StringDict font = new StringDict();

// -- randomness and style:
float jitter = 10;  // <-- how much do I want the coordinates of my letters to move?
int lines = 3;      // <-- how many sets of lines do I want each letter to be represented by?

// -- letter size and spacing:
float letterSize = 100;      // <-- how big are the letters going to be?
float letterSpacing = 1.45;  // <-- how far apart are the letters in a word?
float aspectRatio = 2.5;

// -- do I show enclosing squares?
boolean showSquare = false;

color colourBackground = color(55, 70, 80);
color colourForeground = color(255, 255, 128);


void setup() {

  size(900, 600);
  smooth(8);
  
  getAlphabetCoordinates();

}


void draw() {

  background(colourBackground);

  // -- make words at particular positions and with paricular sizes with makeWordAt():
  makeWordAt(150, 100, letterSize, "MOVE");
  makeWordAt(200, 250, letterSize, "THE");
  makeWordAt(100, 400, letterSize, "MOUSE");

  makeWordAt(500, 100, letterSize*0.8, "ABCDEFG");
  makeWordAt(500, 208, letterSize*0.8, "HIJKLMN");
  makeWordAt(500, 316, letterSize*0.8, "OPQRST");
  makeWordAt(500, 424, letterSize*0.8, "UVWXYZ");

  // -- or alternatively ...
  //makeWordAt(25, 100, letterSize*0.25, "MAKE YOUR OWN FONT BY DEFINING THE COORDINATES ");
  //makeWordAt(25, 150, letterSize*0.25, "OF EACH LETTER IN THE ALPHABET");
  //makeWordAt(25, 225, letterSize*0.25, "ADD SOME RANDOMNESS TO MAKE IT INTERESTING");

  noLoop();  // <-- wait for mouse or keynoard event before looping
}


// -- method fills global 'font' StringDict with coordinates for each letter:

void getAlphabetCoordinates() {

  // -- Add (strings containing) sets of coordiate pairs to the 'font' StringDict for each character:
  font.set("A", "0,100 50,0 50,0 100,100 25,50 75,50");
  font.set("B", "0,0 80,0 80,0 100,10 100,10 100,30 100,30 80,40 80,40 0,40 80,40 100,50 100,50 100,80 100,80 80,100 80,100 0,100 0,100 0,0");
  font.set("C", "100,20 80,0 80,0 20,0 20,0 0,20 0,20 0,80 0,80 20,100 20,100 80,100 80,100 100,80");
  font.set("D", "0,0 80,0 80,0 100,20 100,20, 100,80 100,80 80,100 80,100 0,100 0,100 0,0 0,0");
  font.set("E", "0,0 100,0 0,0 0,100 100,100 0,100 0,55 80,55");
  font.set("e", "0,20 100,20 0,20 10,60 10,60 0,100 100,100 0,100 10,60 80,60 20,5 80,0");
  font.set("E", "0,0 100,0 0,0 10,50 10,50 0,100 100,100 0,100 10,55 80,55");
  font.set("F", "0,0 100,0 0,0 0,100 0,55 80,55");
  font.set("G", "100,20 80,0 80,0 20,0 20,0 0,20 0,20 0,80 0,80 20,100 20,100 80,100 80,100 100,80 100,80 100,60 100,60 60,60");
  font.set("H", "0,100 0,0 100,0 100,100 0,50 100,50");
  font.set("I", "25,0 75,0 50,0 50,100 25,100 75,100");
  font.set("I", "15,0 85,0 50,0 50,100 15,100 85,100");
  font.set("J", "20,0 80,0 80,0 80,80 80,80 80,100 80,100 20,100 20,100 0,80");
  font.set("K", "0,0 0,100 100,0 0,50 0,50 100,100");
  font.set("L", "0,0 0,100 0,100 100,100");
  font.set("M", "0,100 0,0 0,0 50,50 50,50 100,0 100,0 100,100");
  font.set("N", "0,100 0,0 0,0 100,100 100,100 100,0");
  font.set("O", "20,0 80,0 80,0 100,20 100,20, 100,80 100,80 80,100 80,100 20,100 20,100 0,80 0,80 0,20 0,20 20,0");
  font.set("P", "0,100 0,0 0,0 100,0 100,0 100,50 100,50 0,50");
  font.set("Q", "20,0 80,0 80,0 100,20 100,20, 100,80 100,80 80,100 80,100 20,100 20,100 0,80 0,80 0,20 0,20 20,0 50,50 100,100");
  font.set("R", "0,100 0,0 0,0 80,0 80,0 100,10 100,10 100,40 100,40 80,50 80,50 0,50 0,50 100,100");
  font.set("S", "90,10 50,0 50,0 0,10 0,10 0,50 0,50, 100,50 100,50 100,90 100,90 50,100 50,100 0,90");
  font.set("T", "0,0 100,0 50,0 50,100");
  font.set("U", "0,0 0,80 0,80 20,100 20,100 80,100 80,100 100,80 100,80 100,0");
  font.set("V", "0,0 50,100 50,100 100,0");
  font.set("W", "0,0 0,100 0,100 50,50 50,50 100,100 100,100 100,0");
  font.set("X", "0,0 100,100 100,0 0,100");
  font.set("Y", "0,0 50,50 100,0 0,100");
  font.set("Z", "0,0 100,0 100,0 0,100 0,100 100,100");
  font.set("=", "0,0 0,100 0,100 100,100 100,100 100,0 100,0 0,0");
  font.set("-", "20,50 80,50");
  font.set("!", "45,0 50,80 50,80 55,0 55,0 45,0 45,96 45,100 55,100 55,95");
  font.set(" ", "40,90 60,90");
  font.set("0", "30,10 70,10 70,10 90,30 90,30, 90,70 90,70 70,90 70,90 30,90 30,90 10,70 10,70 10,30 10,30 30,10 40,50 60,50");
  font.set("2", "10,10 50,0 50,0 100,20 100,20 0,80 0,80, 0,100 0,100 40,90 40,90 100,100");
  font.set("3", "10,10 50,0 50,0 100,20 100,20 50,40 50,40, 90,40 90,40 100,50 100,50 100,90 100,90 50,100 50,100 0,90");
}


// -- method makes a letter for character 'c' with 'n' overwrites for interesting effects

void makeLetter(char c, int n) {

  // -- c : the letter to show
  // -- n : the number of times to draw the letter (overwriting)

  String coords = font.get(str(c));      // <-- get the coordinates for letter 'c' from the StringDict
  String [] points = split(coords, " "); // <-- store coordinates in 'points' array
  String pPrev = "";  // <-- records the previous point so we can mimimise jitter between continuous lines
  float x=0, y=0, jitterMax;

  // -- scaling and transformation
  pushMatrix();
  scale(letterSize/(100f * aspectRatio), letterSize/100f);
  float translation = 10* 0.8*letterSize/(100f * aspectRatio);
  translate(translation, translation);

  noFill();

  // -- loop that draws the letter will happen 'n' times for interesting overwriting:
  for (int i=0; i<n; i++) {

    // -- randomising
    float sW = random(0.25, 2.5);
    strokeWeight(sW);
    
    //colourForeground = color(random(16, 92), random(255-128, 255-32));
    stroke(colourForeground);

    // -- start a shape :
    beginShape(LINES);

    // -- loop through each point in turn:
    for (String p : points) {
      if (p.equals(pPrev)) {
        // -- reduce jitter if this is the same point as the last one - for continuity:
        jitterMax = jitter/10.0;
      } else {
        // -- set x and y from contents of p String:
        String [] xy = split(p, ",");
        jitterMax = jitter;
        // -- remember to convert String to float for plotting!
        x = float(xy[0]);
        y = float(xy[1]);
      }

      // -- add the random jitter to the points:
      x += random(-jitterMax, jitterMax);
      y += random(-jitterMax, jitterMax);

      vertex(x, y); // <-- draw the vertex
      pPrev = p;    // <-- update previous point to this point ready for the next loop
    }

    // -- important to close the shape shape :
    endShape();
  }
  popMatrix();
}


// -- method makes a word with multiple calls to makeLetter() and translation in X inbetween each:

void makeWord (String word) {
  pushMatrix();

  for (int i=0; i<word.length(); i++) {
    char c = word.charAt(i);

    makeLetter(c, lines);

    if (showSquare) {
      makeLetter('=', 10);
    }
    // -- shift along to the right:
    translate(letterSize/aspectRatio *letterSpacing, 0);
  }
  popMatrix();
}


// -- method makes a word at a particular position:

void makeWordAt(float x, float y, float sz, String text) {
  pushMatrix();
  translate(x, y);
  scale(sz/letterSize);
  makeWord(text);
  popMatrix();
}


// -- update parameters based upo mouse position:

void mouseMoved () {

  jitter = map(mouseX, 0, width, 0, 25);
  lines =  int(map(mouseY, 0, height, 1, 25));
  println("jitter:",jitter,"lines:",lines);
  
  loop();
}


// -- various changes to parameters and state based upon key presses:

void keyPressed() {
  if (key == ' ') showSquare =! showSquare;
  if (key == 'A') {
    aspectRatio = min(aspectRatio + 0.25, 4);
  }
  if (key == 'a') {
    aspectRatio = max(aspectRatio - 0.25, 0.25);
  }
  if (key == 'L') {
    letterSize = min(round(letterSize *1.05), 400);
  }
  if (key == 'l') {
    letterSize = min(round(letterSize /1.05), 400);
  }
  if (key == 'i') {
    int n = round(random(11111, 99999));  // <-- 5 random figures to add to filename
    String fName = "myText."+n+".png";    // <-- filename includs 5 random figures
    save(fName);
    println("Saved:", fName);
  }

  // -- call the draw() loop:
  loop();
}
