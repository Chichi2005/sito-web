let x = 0;
let y = 0;
let space = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
}

function draw() {
  let colore = random(150, 255);
  let trasparenza = random(50, 255);
  let dimensione = random(2, 4);

  stroke(colore, trasparenza);
  strokeWeight(dimensione);

  if (random(1) < 0.5) {
    point(x + space, y + space);
  } else {
    point(x + space, y + 2 * space);
  }

  x = x + space;
  if (x > width) {
    x = 0;
    y = y + space;
  }

  if (y > height) {
    background(20);
    x = 0;
    y = 0;
  }
}
