function Pipe() {
    this.gap = random(180, height / 2);
    this.topTube = random(50,height/2) ;
    this.bottomTube = height - this.topTube - this.gap;
    this.x = width;
    this.w = 50;
    this.speed = 3;
    this.fill = 'white';

    this.hits = function (bird) {
        if (bird.y < this.topTube || bird.y > height - this.bottomTube) {
            if (bird.x > this.x && bird.x < this.x + this.w) {
                this.fill = 'black'
                bird.dead = true;
              
            } 
        }
    }
      
    this.pass = function (bird) {
      
        if (bird.x == this.x) {
            return true;
        }
       
    }

    this.show = function () {
        noStroke()
        fill(this.fill);
        rect(this.x, 0, this.w, this.topTube);
        rect(this.x, height-this.bottomTube, this.w, this.bottomTube);
    }
   
    this.move = function () {
        this.x -= this.speed; 
    }
   
    this.isOffScreen = function () {
        if (this.x < 0) {
            return true;  
        }
    }

}