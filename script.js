// var press = function() {}     es5
// const press = () => {}        es6

let players;
let scores;
let activeGame;

let currentRight = document.getElementById('currentPright')
let scoreRight = document.getElementById('scorePright');

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

}

document.getElementById('btnNew').addEventListener('click', newGame);
document.getElementById('btnRoll').addEventListener('click', roll);
document.getElementById('btnHold').addEventListener('click', hold);
