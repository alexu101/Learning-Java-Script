'use strict'

const score1Steaua = 44;
const score2Steaua = 23
const score3Steaua = 71;
const score1Dinamo = 65;
const score2Dinamo = 54;
const score3Dinamo = 49;

const calcAverage = (score1, score2, score3) => ((score1 + score2 + score3) / 3).toFixed(2);

const steauaAvgScore = calcAverage(score1Steaua, score2Steaua, score3Steaua);
const dinamoAvgScore = calcAverage(score1Dinamo, score2Dinamo, score3Dinamo);

function checkWinner(avgScoreTeam1, avgScoreTeam2) {
    if (avgScoreTeam1 > avgScoreTeam2)
        console.log(`Steaua wins with an average score of${avgScoreTeam1}`);
    else
        if (avgScoreTeam1 < avgScoreTeam2)
            console.log(`Dinamo wins with an average score of${avgScoreTeam2}`);
        else
            console.log(`No winner! Both teams have an average score of ${avgScoreTeam2}`);
}


checkWinner(steauaAvgScore, dinamoAvgScore);