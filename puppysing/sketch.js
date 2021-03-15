
let kitties = [];
let bubbles = [];
let t = "Use ur keyboard (ノ°∀°)ノ⌒･*:.｡. .｡.:*･゜ﾟ･*☆"
function preload() {

    for (let x = 0; x < 7 ; x++){
        console.log(x)
        kitties[x] = loadImage(`imgs/puppy${x}.jpg`);
        kitties[x].resize(50,50)
    }
    console.log(kitties)
}

function setup() {
    createCanvas(1080, 1080);
    
}

function keyPressed() {
    let r = floor(random(0, kitties.length))
    let b = new Bubble(random(width), random(height), kitties[r]);
    bubbles.push(b)
    t=""

    //make puppycat sound on key press, random notes
}

function draw() {
    background(0);
    fill(255);
    textSize(30)
    text(t,20,50)
    for (let i = 0; i < bubbles.length; i++){
        bubbles[i].display();
        bubbles[i].update();
       
    }

}