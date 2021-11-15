'use strict';

let score = 20;
let highScore = 0;

let secretNumber = Math.trunc(Math.random() * 20 + 1);


document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = String(score);
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.number').textContent = '?';
    score = 20;
    /*document.querySelector('.number').textContent = '?';*/
    document.querySelector('.guess').value = null;
    document.querySelector('.message').textContent = 'Start guessing...';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';


});

const finishWindow = function (color, message) {
    document.querySelector('body').style.backgroundColor = color;//#ff0000

    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.message').textContent = message; //'😓 Lost game! Maybe you want to try again?';
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (score > 1) {
        if (!guess) //guess is 0
        {
            document.querySelector('.message').textContent = 'No number !🙄 ';
        }
        else if (guess === secretNumber) {

            document.querySelector('.number').textContent = secretNumber;

            if (score > highScore) {

                finishWindow('#60b347', 'Congratulations! Correct number! 😱 New High Score!');

                highScore = score;
                document.querySelector('.highscore').textContent = String(highScore);
            }
            else
                finishWindow('#60b347', 'Congratulations! Correct number! 😱')
        }
        else {

            score--;
            document.querySelector('.score').textContent = String(score);
            if (guess > secretNumber)
                document.querySelector('.message').textContent = 'Too high! Try again! 😐';
            else
                document.querySelector('.message').textContent = 'Too low! Try again! 😐';

        }
    }
    else {

        finishWindow('#ff0000', '😓 Lost game! Maybe you want to try again?');

        if (score == 1)
            score--;
        document.querySelector('.score').textContent = String(score);
    }
});

