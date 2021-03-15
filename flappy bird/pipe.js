function Pipe() {
    this.top = random(height/2);
    this.bottom = random(height/2);
    this.x = width;
    this.w = 40;
    this.speed = 3;
    this.fill = 'white'
    this.gap = random(35, height / 2);

    this.hits = function (bird) {
        if (bird.y < this.top || bird.y > height - this.bottom) {
            if (bird.x > this.x && bird.x < this.x + this.w) {
                this.fill = 'green'
                bird.dead = true;
            }
        }
    }

    this.show = function () {
        noStroke()
        fill(this.fill);
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height-this.bottom, this.w, this.bottom);
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