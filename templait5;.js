let x = 0;
let y = 0;
//spazziatura texture
let spacing = 40;
let ellipseRate = 38;
//spessore delle linee
let strokeW = 3;

function setup() {
  //misura della finestra (windowWidth=massima larghezza windowHeight=massima   altezza)
  createCanvas(windowWidth, windowHeight);  
    //colore sfondo
  background(100, 0, 0);
  let sopraR = (255);
  let sopraG = (2);
  let sopraB = (155);

  let valoreR = (255);
  let valoreG = (55);
  let valoreB = (25);
  
  const sopraColor = color(sopraR, sopraG, sopraB);
  const valoreColor = color(valoreR, valoreG, valoreB);
  
  for(let y = 0; y < height; y++){
    
    const lineColor = lerpColor(sopraColor, valoreColor, y / height);
    
    stroke(lineColor);
    line(0, y, width, y);
  }
}

//funzione di disegno
function draw() {
   //nominativo del pattern
  linePattern();
}

//caratteristiche del pattern
function linePattern(){
  //spessore pattern
  strokeWeight(strokeW);
  //cambia la forma dell'estremità delle linee (ROUND=tondo SQUARE=quadrato)
  strokeCap(ROUND);
  //colore delle linee orizzontali
  stroke(255, 125, 255);

  //dopo quanto realizzare le linee verticali allinteno della texture
  if(random(1)<0.5){
    //colore delle linee verticali
    stroke(255, 170, 218);
    //linee verticali
     line(x,y+spacing,x,y);
    
  }else{
    //linee orizzontali
    line(x,y,x+ellipseRate,y);
  }
  x += spacing;
  if(x > width){
    x = 0;
    y = y + spacing;
  }
}
