let dot = {
  x: 100,
  y:50
}

let col = {
  r: 200,
  g:0,
  b:0
}

function setup() {
  createCanvas(400, 400);
  background(0)
}

function draw() {
 mousePressed()
  
}


function mousePressed(){
  
  if(mouseIsPressed){
    
    col.r = random(80,250)
    col.g = random(0,10)
    col.b = random(80,250)
    dot.x = mouseX
    dot.y = mouseY
    heart(dot.x,dot.y, 40,40)
    
  }else{
     fill(col.r,col.g,col.b);
  }

}

function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}