'use strict';

//Document Selecting Elements
const score0El = document.querySelector('#score--0');//"Add El to the name to not get confused with the actual value of the score"
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const activePlayer0El = document.querySelector('.player--0');
const activePlayer1El = document.querySelector('.player--1');

//Starting conditions
score0El.textContent = 0;//setting scoresEl to 0
score1El.textContent = 0;
diceEl.classList.add('hidden');//hide the dice at the begining of the game
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true;

const switchPlayer = function () {
    currentScore = 0;//set 0 the current of the player who rolled 1
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;// change the active player
    activePlayer0El.classList.toggle('player--active');
    activePlayer1El.classList.toggle('player--active');
}

//Rolling the dice functionality
rollBtn.addEventListener('click', function () {
    if (playing) {
        //1.Generating the random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        //2.Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        //3.Check for rolled 1
        if (dice != 1) {
            //Add score to curr_score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            //Switch to next player
            switchPlayer();
        }
    }
});

holdBtn.addEventListener('click', function () {
    if (playing) {
        console.log(12);
        //1.Add current score to active player
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //2.check player score is >=100 / finish game
        if (scores[activePlayer] >= 100) {
            diceEl.classList.add('hidden');
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
        }
        else
            //3.switch to next player
            switchPlayer();
    }
}
);

newBtn.addEventListener('click', function () {
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore = 0;
    activePlayer = 0;
    scores[0] = scores[1] = 0;
    playing = true;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
})



