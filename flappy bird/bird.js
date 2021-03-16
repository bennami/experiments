function Bird(sprite) {
    this.y = height / 2;
    this.x = 25;
    this.gravity = 0.5;
    this.lift = -15; 
    this.velocity = 0;
    this.dead = false;
    this.sprite = sprite

    // first we need to display our bird
    this.show = function () {
        image(this.sprite,this.x, this.y, 100,100);
    }

    this.up = function () {
        this.velocity += this.lift
    }

    // then we will need to update the position so it goes down
    this.move = function () {
        this.velocity += this.gravity
        this.y += this.velocity

        //we make it stop when it reaches the bottom
        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }

        //prevent from going outside the frame from top
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }
}


