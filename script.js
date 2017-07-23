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

// function activeGame
const switchPlayers = () => {
  // si activeGame est vrai
  if (activeGame) {
    activeGame = false;
    currentLeft.innerHTML = "0";
    document.getElementById('activeLeft').classList.remove('active');
    document.getElementById('activeRight').classList.add('active');
  } else {
    activeGame = true;
    currentRight.innerHTML = "0";
    document.getElementById('activeRight').classList.remove('active');
    document.getElementById('activeLeft').classList.add('active');
  }
}

// function roll
const roll = () => {
  // random de 1 à 6
  let random = Math.floor(Math.random()*6)+1;

  if (activeGame) {
    // si le random est égal à 1
    if (random === 1) {
      // on change de joueur
      switchPlayers();

    } else {
      // sinon on concatène le currentLeft(score) avec le random
      currentLeft.innerHTML = Number(currentLeft.innerHTML) + random;
    }
  } else {
    // si le random est égal à 1
    if (random === 1){
      // on change de joueur
      switchPlayers();
    } else {
      // sinon on concatène le currentRight(score) avec le random
      currentRight.innerHTML = Number(currentRight.innerHTML) + random;
    }
  }
  // dice.src = img(random)
  document.getElementById('dice').src = `images/dice-${random}.png`
}

// quand on click sur hold
const hold = () => {
  // si l'activeGame
  if(activeGame){
    // on stock scorePleft = scorePleft + currentPleft
    scoreLeft.innerHTML = Number(scoreLeft.innerHTML) + Number(currentLeft.innerHTML);
    // puis le hold retourne à 0
    currentLeft.innerHTML = "0";

    // si scorePleft >= 100 playerLeft = WINNER
    if (Number(scoreLeft.innerHTML) >= 100) {
      playerLeft.style.color = "red";
      playerLeft.style.fontWeight= "bold";
      playerLeft.innerHTML = "WINNER !"
      document.getElementById("btnRoll").disabled = true;
      document.getElementById("btnHold").disabled = true;

    }
    // on a hold du coup on switchPlayers
    switchPlayers();
  } else {
    // on stock scorePright = scorePright + currentPright
    scoreRight.innerHTML = Number(scoreRight.innerHTML) + Number(currentRight.innerHTML);
    // puis le hold retourn à 0
    currentRight.innerHTML = "0";

    // si scorePright >= 100 playerRight = WINNER
    if (Number(scoreRight.innerHTML) >= 100) {
      playerRight.style.color = "red";
      playerRight.style.fontWeight= "bold";
      playerRight.innerHTML = "WINNER !"
      document.getElementById("btnRoll").disabled = true;
      document.getElementById("btnHold").disabled = true;


    }
    // on a hold du coup on switchPlayers
    switchPlayers();
  }
}

  document.getElementById('btnNew').addEventListener('click', newGame);
  document.getElementById('btnRoll').addEventListener('click', roll);
  document.getElementById('btnHold').addEventListener('click', hold);
