'use strict';

//selecting elements
const rollBtn = document.querySelector('.btn--roll');
const diceEl = document.querySelector('.dice');
const holdBtn = document.querySelector('.btn--hold');
const replayBtn = document.querySelector('.btn--new');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currScore0El = document.getElementById('current--0');
const currScore1El = document.getElementById('current--1');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const yesReplay = document.querySelector('.replay')
//set the environement;
let activePlayer = 0;
let currScoreVal = 0;
let score0Val = 0;
let score1Val = 0;
let winner = 0;
currScore0El.textContent = '0';
currScore1El.textContent = '0';
score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden');

//functions and buttons
const switchPlayer = function () {
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
    document.getElementById(`current--${activePlayer}`).textContent = '0';
    activePlayer = (activePlayer === 0) ? 1 : 0;
    currScoreVal = 0;
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
}

const replay = function () {
    console.log(0);
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--active');
    document.querySelector(`.player--0`).classList.add('player--active');

    activePlayer = 0;
    currScoreVal = 0;
    score0Val = 0;
    score1Val = 0;
    winner = 0;
    currScore0El.textContent = '0';
    currScore1El.textContent = '0';
    score0El.textContent = '0';
    score1El.textContent = '0';
    diceEl.classList.add('hidden');
    modal.classList.add('hidden');
}

rollBtn.addEventListener('click', function () {
    diceEl.classList.remove('hidden');
    if (winner == 0) {
        let diceRoll = Math.trunc(Math.random() * 6) + 1;
        diceEl.src = `dice-${diceRoll}.png`;
        currScoreVal += diceRoll;

        if (diceRoll != 1) {
            console.log(activePlayer);
            document.getElementById(`current--${activePlayer}`).textContent = currScoreVal;
        }
        else {
            switchPlayer();
        }
    }
})

holdBtn.addEventListener('click', function () {
    if (winner == 0) {
        if (currScoreVal !== 0) {

            if (activePlayer === 0) {
                score0Val += currScoreVal;
                document.getElementById(`score--${activePlayer}`).textContent = score0Val;
            }
            else {
                score1Val += currScoreVal;
                document.getElementById(`score--${activePlayer}`).textContent = score1Val;
            }
            if (score0Val >= 20 || score1Val >= 20) {
                document.querySelector(`.player--${activePlayer}`).classList.toggle('player--winner');
                winner = 1;
            }
            else {
                switchPlayer();
            }

        }
    }
})

replayBtn.addEventListener('click', function () {
    modal.classList.remove('hidden');
});

document.addEventListener('keydown', function (key) {
    if (key.key == 'r' || key.key == 'R')
        modal.classList.remove('hidden');
});

yesReplay.addEventListener('click', replay);

closeModal.addEventListener('click', function () {
    modal.classList.add('hidden');
})


