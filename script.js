// var press = function() {}     es5
// const press = () => {}        es6

// let players;
// let scores;
// let game;

// function roll
const roll = () => {
  // random de 1 à 6
  let random = Math.floor(Math.random()*6)+1;

  // si le random est différent de 1
  if (random != 1){
    // currentPright = currentPright + random
    document.getElementById('currentPright').innerHTML = Number(document.getElementById('currentPright').innerHTML) + random;
  } else {
    // sinon currentPright = 0
    document.getElementById('currentPright').innerHTML = 0;
  }
  // dice.src = img(random)
  document.getElementById('dice').src = `images/dice-${random}.png`
}

// function hold
const hold = () => {

  //  scorePright = number(scorePright) + number(currentPright)
  document.getElementById('scorePright').innerHTML = Number(document.getElementById('scorePright').innerHTML) + Number(document.getElementById('currentPright').innerHTML);

  // currentPright = 0
  document.getElementById('currentPright').innerHTML = "0";

}

document.getElementById('btnRoll').addEventListener('click', roll);
document.getElementById('btnHold').addEventListener('click', hold);
