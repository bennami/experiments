function Pipe() {
    let gap=random(100, height / 2);
    this.topTube = height/2 - gap/2;
    this.bottomTube = height/2 - gap/2;
    this.x = width;
    this.w = 40;
    this.speed = 3;
    this.fill = 'white'
   
    
    

    this.hits = function (bird) {
        if (bird.y < this.topTube || bird.y > height - this.bottomTube) {
            if (bird.x > this.x && bird.x < this.x + this.w) {
                this.fill = 'green'
                bird.dead = true;
              
            } else if (bird.x > this.x && bird.x > this.x + this.w) {
                count++
                console.log('pass');
            }
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