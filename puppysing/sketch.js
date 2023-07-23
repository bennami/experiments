
let kitties = [];
let bubbles = [];
let t = "Use ur keyboard (ノ°∀°)ノ⌒･*:.｡. .｡.:*･゜ﾟ･*☆"
let notes = {
    'a': 800,   
    'b': 900,   
    'c': 1000,  
    'd': 1100,  
    'e': 1200, 
    'f': 1300, 
    'g': 1400, 
    'h': 1500, 
    'i': 1600, 
    'j': 1700, 
    'k': 1800, 
    'l': 1900, 
    'm': 1000, 
    'n': 1100, 
    'o': 1200, 
    'p': 1300, 
    'q': 1400, 
    'r': 500, 
    's': 600, 
    't': 700, 
    'u': 800, 
    'v': 900, 
    'w': 400, 
    'x': 100, 
    'y': 200, 
    'z': 300  
  };

function preload() {

    for (let x = 0; x < 7 ; x++){
        console.log(x)
        kitties[x] = loadImage(`imgs/puppy${x}.jpg`);
        kitties[x].resize(50,50)
    }
    console.log(kitties)
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    window.addEventListener("keydown", playNote);
}

function windowResized() {
    // Resize the canvas to fit the window
    resizeCanvas(windowWidth, windowHeight);
  }

function keyPressed() {
    let r = floor(random(0, kitties.length))
    let b = new Cat(random(width), random(height), kitties[r]);
    bubbles.push(b)
    t=""

}

function playNote(event) {
    const key = event.key.toLowerCase();
    // If the pressed key is in the notes object, play the corresponding note
    if (notes.hasOwnProperty(key)) {
      const note = notes[key];
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(note, audioContext.currentTime);
      oscillator.connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.3); // Play the note for 0.3 seconds
    }
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