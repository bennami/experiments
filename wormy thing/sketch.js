var bubbles = [];

function setup() {
    createCanvas(600, 600);
}

function mousePressed() {
   background(0);
}

function draw() {
   background(102,0,153);
    if (mouseIsPressed) {
        let b = new Bubble(mouseX, mouseY);
        bubbles.push(b);
    }

     for (let i = bubbles.length-1; i >= 0; i--){
        bubbles[i].update();
        bubbles[i].display();
        if (bubbles[i].isFinished()) {
            bubbles.splice(i,1)
        }
     } 
}