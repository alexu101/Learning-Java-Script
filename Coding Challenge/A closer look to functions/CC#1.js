'use strict';

//task1
const poll = {
    answers: [0, 0, 0, 0],
    registerNewAnswer() {
        //display question and collect answer
        const answer = prompt('What is your favourite programming language?\n0: JavaScript\n1: Python\n2: Rust\n3: C++');
        //console.log(typeof (Number(answer))

        //evaluate answer and update array
        if (!isNaN(Number(answer)) && Number(answer) <= 3 && Number(answer) >= 0 && Number.isInteger(Number(answer)))
            this.answers[Number(answer)]++;
        else console.log('Not a valid answer!❌');


    }
}

//task 2
const btnPoll = document.querySelector('.poll');
btnPoll.addEventListener('click', poll.registerNewAnswer.bind(poll));

//task 3
poll.displayResults = function (type = 'array') {
    if (type === 'array')
        console.log(this.answers);
    else
        if (type === 'string') {
            const ans = `Poll results are ${(this.answers).join(', ')
                } .`
            console.log(ans);
        }
        else {
            console.log('Not a valid type!❌ Choose between "string" and "array"');
        }
};


poll.displayResults.call(poll);