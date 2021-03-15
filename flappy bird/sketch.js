let bird;
let sprite;
let pipes = []

function preload() {
    sprite = loadImage("assets/flappy-sprite.png");
}
function setup() {
    createCanvas(400, 400);
    bird = new Bird(sprite)
    pipes.push(new Pipe());
    textAlign(CENTER);
    textSize(21);
}

function draw() {
    background(0)
    bird.update()
    bird.show()
    

    // every 40 frames, make a new pipe
    
    if (!bird.dead) {
        if (frameCount % 60 == 0) {
            pipes.push(new Pipe())
        }
   
        //show and move the pipes
        for (let i = 0; i < pipes.length; i++){
            pipes[i].show();
            pipes[i].move();

            //check if bird hits pipe
            pipes[i].hits(bird)
            if (pipes[i].isOffScreen()) {
            pipes.splice(i,1)
            }
        }

    } else {

       fill(255)
        text('U LOST', width / 2, height / 2)
        text('spacebar to restart', width / 2, height / 2+100)
        pipes.splice(0, pipes.length);
 
    }
}

function keyPressed() {
    
    if (key == ' ') {
        bird.up()
        bird.dead = false
    }
}