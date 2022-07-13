'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = function () {
  //Starting condition/Resetting the values (invisible part)
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  //Reset the scores (visible part)
  console.log('New game');
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  //Set player 1 as starting player (visible part)
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  //Set current player's score to 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  //switch to next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Roll dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //2.Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //Check for rolled 1
    if (dice !== 1) {
      //Add score to the current score
      currentScore += dice;
      //Add to the active player's current score
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;

      /* //Display the score of player 0 only (This one is deleted)
      current0El.textContent = currentScore; //CHANGE LATER */
    } else {
      //Switch to the next player
      switchPlayer();
    }
  }
});

//Hold button functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to the active player's score
    //scores[1]=scores[1]+currentScore;
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    //2. Check if player's score is >=100
    if (scores[activePlayer] >= 100) {
      //Finish the game
      playing = false;
      //Hide the dice when there is winner
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      //Switch to the next player
      switchPlayer();
    }
  }
});

//Resetting/New game
btnNew.addEventListener('click', init);
