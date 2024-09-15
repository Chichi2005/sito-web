
let x = 0;
let y = 0;
let m =-35;
let n = 35;
//spazziatura texture
let spacing = 28;
let ellipseRate = 35;
//spessore delle linee
let strokeW = 2;

function setup() {
  //misura della finestra (windowWidth=massima larghezza windowHeight=massima   altezza)
  createCanvas(windowWidth, windowHeight);  
    //colore sfondo
  background(100, 0, 0);
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
  stroke(200, 0, 0);

  //dopo quanto realizzare le linee verticali allinteno della texture
  if(random(1)<0.3){
    //colore delle linee verticali
    stroke(255, 170, 0);
    //linee verticali
     line(x+n,y,x,y+m);
    
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
