let x = 0;
let y = 0;
let space = 20;
let g = 255;
let b = 120;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
}

function draw() {
  noFill();

  g = random(120, 255);

  stroke(0, g, b);
  strokeWeight(2.2);

  if (random(1.5) < 0.5) {
    circle(x, y, space);
  } else {
    rect(x, y, space);
  }

  x = x + space;
  if (x > width) {
    x = 0;
    y = y + space;
  }

  g = constrain(g + random(-8, 8), 0, 255);
  b = constrain(b + random(-5, 5), 0, 255);
}
