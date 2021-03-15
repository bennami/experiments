
function Bubble(x, y) {
  
  this.x = x;
  this.y = y;
  this.lifespan = 250;
  this.size = 80

  this.display = function () {
    //stroke(255);
    noStroke();
    fill( 255,150,this.lifespan);
    ellipse(this.x,this.y,this.size)
  }
  this.isFinished = function () {
    if (this.lifespan <= 0 || this.size == 0) {
      return true
    } else {
      return false
    }
  }
  this.update = function () {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
    this.lifespan--;
    if (!(this.size <= 0)){
       this.size --;
    }
  }
}