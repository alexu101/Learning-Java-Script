'use strict';

//selecting elements
const againBtn = document.querySelector('.again');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const guessedNumber = document.querySelector('.number');
const checkBtn = document.querySelector('.check');

//set the environement
let scoreVal = 20;
let highscoreVal = 0;
let randomVal = Math.trunc(Math.random() * 21) + 1;


//defining buttons

const check = function () {

    if (scoreVal > 0) {

        scoreEl.textContent = scoreVal;
        let guessVal = guess.value;
        if (guessVal == randomVal) {
            guessedNumber.textContent = randomVal;
            document.querySelector('body').style.backgroundColor = 'rgb(48, 155, 27)';
            guessedNumber.style.width = '30rem';

            if (scoreVal <= highscoreVal)
                message.textContent = `🎉Congratulations! Your score is ${scoreVal} ! 🤑`;
            else {
                message.textContent = `🎉Congratulations! Your score is ${scoreVal} ! New Highscore 🏆`;
                highscoreVal = scoreVal;// update highscore
                highscoreEl.textContent = highscoreVal;
            }
        }
        else if (guessVal < randomVal) {
            message.textContent = `🙁 Too low ! Try again!`;
        }
        else {
            message.textContent = `🙁 Too high! Try again!`;
        }
    }
    else {
        message.textContent = `😛 Lost game! Try again!`;
        document.querySelector('body').style.backgroundColor = 'rgb(112, 4, 4)';
        guessedNumber.style.width = '25rem';
    }
    scoreVal--;
    guess.value = null;
}

const replay = function () {
    console.log('ok');
    scoreVal = 20;
    highscoreVal = 0;
    randomVal = Math.trunc(Math.random() * 21) + 1;
    scoreEl.textContent = scoreVal;
    guessedNumber.textContent = '?';
    message.textContent = `😛 Lost game! Try again!`;
    document.querySelector('body').style.backgroundColor = '#222';
    message.textContent = 'Start guessing...';
    guessedNumber.style.width = '15rem';
    guess.value = null;
};

checkBtn.addEventListener('click', check);
document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key == 'Enter' && guess.value)
        check();
    else
        if (e.key == 'r' || e.key == 'R')
            replay();
})

againBtn.addEventListener('click', replay);

