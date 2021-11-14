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

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (score > 0) {
        if (!guess) //guess is 0
        {
            document.querySelector('.message').textContent = 'No number !🙄 ';
        }
        else if (guess === secretNumber) {
            document.querySelector('body').style.backgroundColor = '#60b347';

            document.querySelector('.number').style.width = '30rem';

            document.querySelector('.number').textContent = secretNumber;

            if (score > highScore) {
                highScore = score;

                document.querySelector('.message').textContent = 'Congratulations! Correct number! 😱 New High Score!'

                document.querySelector('.highscore').textContent = String(highScore);
            }
            else
                document.querySelector('.message').textContent = 'Congratulations! Correct number! 😱';
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
        document.querySelector('body').style.backgroundColor = '#ff0000';

        document.querySelector('.number').style.width = '15rem';

        document.querySelector('.message').textContent = '😓 Lost game! Maybe you want to try again?';
    }
});

