let isPlaying, startTime, bpm, beat, measures;
let borderLeft, borderTop, measureWidth;
let tracks;
let logo;
let crash, ride, hhOpen, hhClosed, clap, tom, snare, bass;

function preload() {
  logo = loadImage("images/logo.png");
  crash = loadSound("samples/CSHD0.wav");
  ride = loadSound("samples/RIDED4.wav");
  hhOpen = loadSound("samples/HHOD0.wav");
  hhClosed = loadSound("samples/HHCD0.wav");
  clap = loadSound("samples/HANDCLP1.wav");
  tom = loadSound("samples/HT0D0.wav");
  snare = loadSound("samples/ST0T0S7.wav");
  bass = loadSound("samples/BT0A0A7.wav");
}

class Track {
  constructor(name, sf, yPos) {
    this.trackName = name;
    this.sf = sf;
    this.yPos = yPos;
    this.mute = false;
    this.cells = new Array(measures);
    this.cells.fill(false);
    this.sqSize = (width - 2.0 * borderLeft) / measures - 12;
  }

  draw() {
    push();

    // Colours determined by whether track is muted and whether cell is 'on' or 'off'.
    let textColour = color(100, 80, 60);
    let onFill = color(226, 93, 43);
    let onStroke = color(250, 200, 60);
    let offFill = color(230, 223, 203);
    let offStroke = color(100, 80, 60);

    if (this.mute) {
      textColour = color(206, 185, 164);
      onFill = color(206, 198, 196);
      onStroke = color(250, 235, 200);
      offStroke = color(206, 185, 164);
    }

    // Label track.
    fill(textColour);
    noStroke();
    textAlign(RIGHT, CENTER);
    text(this.trackName + "  ", borderLeft * 1.5, this.yPos);

    // Draw each beat, highlighting current beat and 'on' beats.

    for (let b = 0; b < measures; b++) {
      if (b == beat) {
        strokeWeight(3);
      } else {
        strokeWeight(1);
      }

      if (this.cells[b]) {
        fill(onFill);
        stroke(onStroke);
      } else {
        fill(offFill);
        stroke(offStroke);
      }
      rect(
        map(b, 0, measures, borderLeft * 1.5 + 6, width - borderLeft * 0.5 + 6),
        this.yPos - this.sqSize / 2,
        this.sqSize,
        this.sqSize,
        6
      );
    }
    pop();
  }

  // Play the sample at the given beat if it is 'on'.
  trigger(beat) {
    if (!this.mute && this.cells[beat]) {
      this.sf.play();
    }
  }

  // Find the cell under the mouse position and flip its state.
  toggle() {
    if (
      mouseY > this.yPos - this.sqSize / 2 &&
      mouseY < this.yPos + this.sqSize / 2
    ) {
      if (mouseX < borderLeft * 1.5) {
        this.mute = !this.mute;
      } else if (
        mouseX > borderLeft * 1.5 &&
        mouseX < width - borderLeft * 0.5
      ) {
        let toggleCell = int(
          map(mouseX, borderLeft * 1.5, width - borderLeft * 0.5, 0, measures)
        );
        this.cells[toggleCell] = !this.cells[toggleCell];
      }
    }
  }

  setSequence(seq) {
    this.cells = this.cells.fill(false);

    let numPoints = min(seq.length, measures);
    for (let i = 0; i < numPoints; i++) {
      if (seq.charAt(i) == "1") {
        this.cells[i] = true;
      } else {
        this.cells[i] = false;
      }
    }
  }
}

function setup() {
  createCanvas(900, 520);
  borderLeft = 100;
  borderTop = 120;
  textSize(18);

  isPlaying = false;
  bpm = 80;
  measures = 16;
  measureWidth = (width - 2.0 * borderLeft) / measures;

  tracks = [
    new Track("Crash", crash, borderTop),
    new Track("Ride", ride, borderTop + measureWidth),
    new Track("HH Open", hhOpen, borderTop + 2 * measureWidth),
    new Track("HH Closed", hhClosed, borderTop + 3 * measureWidth),
    new Track("Clap", clap, borderTop + 4 * measureWidth),
    new Track("Tom", tom, borderTop + 5 * measureWidth),
    new Track("Snare", snare, borderTop + 6 * measureWidth),
    new Track("Bass", bass, borderTop + 7 * measureWidth),
  ];

  resetClock();
}

function draw() {
  background(232, 226, 211);
  image(logo, width - 0.5 * borderLeft - 240, 20, 240, 65);

  // Bar backgrounds
  fill(206, 189, 146);
  noStroke();
  rect(
    borderLeft * 1.5,
    borderTop - 0.5 * measureWidth,
    4 * measureWidth,
    tracks.length * measureWidth,
    12
  );
  rect(
    borderLeft * 1.5 + 8 * measureWidth,
    borderTop - 0.5 * measureWidth,
    4 * measureWidth,
    tracks.length * measureWidth,
    12
  );

  for (let track of tracks) {
    track.draw();
  }

  if (isPlaying) {
    // Advance beat if enough time has ellapsed.
    let ellapsed = int((bpm * (millis() - startTime)) / 15000) % measures;
    if (ellapsed != beat) {
      beat = ellapsed % measures;
      for (let track of tracks) {
        track.trigger(beat);
      }
    }
  }
}

function mouseClicked() {
  for (let track of tracks) {
    track.toggle();
  }
}

function keyPressed() {
  if (key === " ") {
    if (isPlaying) {
      isPlaying = false;
    } else {
      resetClock();
      isPlaying = true;
    }
  } else if (key === "1") {
    // Basic Four on the Floor
    tracks[0].setSequence(""); // Crash
    tracks[1].setSequence(""); // Ride
    tracks[2].setSequence(""); // HH Open
    tracks[3].setSequence(""); // HH Closed
    tracks[4].setSequence(""); // Clap
    tracks[5].setSequence(""); // Tom
    tracks[6].setSequence("0010001000100010"); // Snare
    tracks[7].setSequence("1000100010000100"); // Bass
  } else if (key === "2") {
    // Funky Four on the floor
    tracks[0].setSequence(""); // Crash
    tracks[1].setSequence(""); // Ride
    tracks[2].setSequence("0000000000001101"); // HH Open
    tracks[3].setSequence("1010010101010000"); // HH Closed
    tracks[4].setSequence("0000010100010100"); // Clap
    tracks[5].setSequence(""); // Tom
    tracks[6].setSequence("0010001000100010"); // Snare
    tracks[7].setSequence("1000010010000100"); // Bass
  } else if (key === "3") {
    // Funky Drummer.
    tracks[0].setSequence(""); // Crash
    tracks[1].setSequence(""); // Ride
    tracks[2].setSequence("0000010000000010"); // HH Open
    tracks[3].setSequence("1111101111111101"); // HH Closed
    tracks[4].setSequence(""); // Clap
    tracks[5].setSequence(""); // Tom
    tracks[6].setSequence("0000100101011001"); // Snare
    tracks[7].setSequence("1010000000100100"); // Bass
  } else if (key === "4") {
    // Bossa Nova
    tracks[0].setSequence(""); // Crash
    tracks[1].setSequence(""); // Ride
    tracks[2].setSequence("0010001000100010"); // HH Open
    tracks[3].setSequence("1101110111011101"); // HH Closed
    tracks[4].setSequence("1001001000100100"); // Clap
    tracks[5].setSequence(""); // Tom
    tracks[6].setSequence(""); // Snare
    tracks[7].setSequence("1001100110011001"); // Bass
  } else if (key === "5") {
    // Acid Riff
    tracks[0].setSequence("0000000000000001"); // Crash
    tracks[1].setSequence("0100000000000000"); // Ride
    tracks[2].setSequence("0010010000100100"); // HH Open
    tracks[3].setSequence("1000101010001011"); // HH Closed
    tracks[4].setSequence("0000000100000011"); // Clap
    tracks[5].setSequence("0010000000100000"); // Tom
    tracks[6].setSequence("0000100000001000"); // Snare
    tracks[7].setSequence("1000100010001000"); // Bass
  } else if (key === "0") {
    clearSequence();
    resetClock();
    isPlaying = false;
  }
}

function resetClock() {
  beat = -1;
  // Appears to be required to allow sounds to be played via Safari
  hhClosed.play();
  hhClosed.stop();
  startTime = millis();
}

function clearSequence() {
  for (let track of tracks) {
    track.setSequence("");
  }
}
