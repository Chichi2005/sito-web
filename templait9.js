let particelle = [];
const quantità = 3500;
const scalaNoise = 0.008;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < quantità; i++) {
    particelle.push(createVector(random(width), random(height)));
  }

  strokeWeight(1.2);
  stroke("#BEBEFA");
  frameRate(60);
}

function draw() {
  background(0, 10);

  for (let i = 0; i < quantità; i++) {
    let p = particelle[i];
    point(p.x, p.y);

    let n = noise(p.x * scalaNoise, p.y * scalaNoise);
    let a = TAU * n;

    p.x += cos(a);
    p.y += sin(a);

    if (!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}
