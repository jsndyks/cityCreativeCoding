const names = [];

function setup() {
  createCanvas(300, 350);
  fill(0);
  textSize(22);

  names.push("Jon");
  names.push("Jason");
  names.push("Seb");
  names.push("Radu");
  names.push("Eva");
  names.push("Andy");
  names.push("Dympna");
  names.push("Ross");
  names.push("Simone");
  names.push("Charlie");
  names.push("Jo");
}

function draw() {
  background(255);
  let yPos = 30;

  names.forEach((name) => {
    text(name, 50, yPos);
    yPos = yPos + 30;
  });
}

function keyPressed() {
  if (key == "j") {
    removeName("Jon");
    removeName("Jason");
    removeName("Jo");
  } else if (key == "s") {
    removeName("Seb");
    removeName("Simone");
  }
}

function removeName(item) {
  const i = names.indexOf(item);
  if (i >= 0) {
    names.splice(i, 1);
  }
}
