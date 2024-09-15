let x = -40;
let y = -25;

let randomvalue = 50;
let randomvalue2 = 30;
let randomvalue3 = 40;

let strokeX = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(170);
  
  let sopraR = random(255);
  let sopraG = random(255);
  let sopraB = random(255);

  let valoreR = random(255);
  let valoreG = random(255);
  let valoreB = random(255);
  
  const sopraColor = color(sopraR, sopraG, sopraB);
  const valoreColor = color(valoreR, valoreG, valoreB);
  
  for(let y = 0; y < height; y++){
    
    const lineColor = lerpColor(sopraColor, valoreColor, y / height);
    
    stroke(lineColor);
    line(0, y, width, y);
}
}

function draw(){
  
  patternLines();
  
  let sR = random(255);
  let sG = random(255);
  let sB = random(255);
  let vR = random(255);
  let vG = random(255);
  let vB = random(255);
  let hR = random(255);
  let hG = random(255);
  let hB = random(255);
  
  const sSium = color(sR, sG, sB);
  const vSium = color(vR, vG, vB);
  const hSium = color(hR, hG, hB);
}

function patternLines(){
  strokeWeight(strokeX);
  strokeCap(SQUARE);
  stroke(random(255), random(255), random(255));
  if(random(255)<30){
    stroke(random(255), random(255), random(255));
    line(x,y+randomvalue,x+randomvalue2,y);
    
  }else{
    line(x,y+randomvalue2,x+randomvalue,y);
  }
  x += randomvalue3;
  if(x > width){
    x = 0;
    y = y + strokeX;
  }
}
