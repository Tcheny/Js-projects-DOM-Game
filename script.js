// var press = function() {}     es5
// const press = () => {}        es6
let activeGame = true;

let currentRight = document.getElementById('currentPright');
let currentLeft = document.getElementById('currentPleft');

let scoreRight = document.getElementById('scorePright');
let scoreLeft = document.getElementById('scorePleft');

let playerRight = document.getElementById('namePright');
let playerLeft = document.getElementById('namePleft');

// function newGame
const newGame = () => {
  location.reload();
}

// function roll
const roll = () => {
  // random de 1 à 6
  let random = Math.floor(Math.random()*6)+1;

  // si le random est différent de 1
  if (random != 1){
    // currentPright = currentPright + random
    currentRight.innerHTML = Number(currentRight.innerHTML) + random;
  } else {
    // sinon currentPright = 0
    currentRight.innerHTML = 0;
  }
  // dice. src = img(random)
  document.getElementById('dice').src = `images/dice-${random}.png`
}

// function hold
const hold = () => {
  //  scorePright = number(scorePright) + number(currentPright)
  scoreRight.innerHTML = Number(scoreRight.innerHTML) + Number(currentRight.innerHTML);

  // currentPright = 0
  currentRight.innerHTML = "0";
  if (Number(scoreRight.innerHTML) >= 100) {
    playerRight.style.color = "red";
    playerRight.style.fontWeight= "bold";
    playerRight.innerHTML = "WINNER !"
  }

}


document.getElementById('btnNew').addEventListener('click', newGame);
document.getElementById('btnRoll').addEventListener('click', roll);
document.getElementById('btnHold').addEventListener('click', hold);
