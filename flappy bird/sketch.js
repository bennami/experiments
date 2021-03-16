let bird,sprite;
let pipes = []
let startGame = false;
let startText = 'press spacebar to start';
let count = 0;

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
    background(50,50,100)
    bird.show()
    fill(255)
    text(startText, width / 2, height / 2)

    if (startGame) {
        startText = '';
        bird.move();
        fill(255)
        text(count, 30, 30)
        
        // every 40 frames, make a new pipe
        if (frameCount % 60 == 0) {
            pipes.push(new Pipe())
        }
   
        //show and move the pipes
        for (let i = 0; i < pipes.length; i++){
            pipes[i].show();
            pipes[i].move();

            //check if bird hits pipe
            pipes[i].hits(bird)

            // if bird passes +1

             
            if (pipes[i].isOffScreen()) {
            pipes.splice(i,1)
            }
        }

    }
    
    if (bird.dead) {
        pipes.splice(0, pipes.length);
        count = 0;
        fill(255)
        text('U LOST', width / 2, height / 2)
        text('spacebar to restart', width / 2, height / 2+100)   
    }
}

function keyPressed() {
    if (key == ' ') {
        startGame = true;
        bird.up()
        bird.dead = false;   
    }
}