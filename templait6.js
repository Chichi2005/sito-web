let quantità = 10;
let r, g, b;
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(12);
}

function draw() {
  
  background(220, 100);
  r = random(255);
  g = random(255);
  b = random(255);

  beginShape(QUADS);

  fill(r, g, b, 90);
  stroke(100);

  for (let i = 0; i < quantità; i++) {
    vertex(random(width), random(height));
  }

  endShape();
}
