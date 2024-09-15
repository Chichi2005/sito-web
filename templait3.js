let x = 0;
let y = 0;
//spazziatura texture
let spacing = 55;
let ellipseRate = 82;
//spessore delle linee
let strokeW = 5;

function setup() {
  //misura della finestra (windowWidth=massima larghezza windowHeight=massima altezza)
  createCanvas(windowWidth, windowHeight);
  //colore sfondo
  background(50);
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
  //colore delle linee
  stroke(255,155,155);

  //dopo quanto realizzare le linee verticali allinteno della texture
  if(random(1)>0.5){
    stroke(255,155,155);
    //angolazione linee oblique
     line(x,y+spacing,x+spacing,y);
    
  }else{
    //lunghezza linee verticali
    line(x,y,x,y+ellipseRate);
  }
  x += spacing;
  if(x > width){
    x = 0;
    y = y + spacing;
  }
}
