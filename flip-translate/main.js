
const flipper = document.getElementById("flipper");

const front= document.querySelector(".back-face");

function flipCard(deg) { 
  
    flipper.style.transform = `rotateY(${deg}deg)`;
    flipper.style.backfaceVisibility = `hidden`;
  console.log(deg);

    // if (this.classList.contains('flip')) {
    //     this.classList.remove('flip');
    // // front.style.display = 'block';
       
    //     console.log('rem');
    // } else {
    //     this.classList.add('flip');
    //     // front.style.display = 'none';
        
    // }
}

//flipper.addEventListener('click', flipCard)




///slider
let slider = document.getElementById('slider');

slider.oninput = function () {
   
    flipCard(this.value);
    
}
