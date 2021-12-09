
//CODING CHALLENGE 3
//task 1

const calcAverageHumanAge = function (ages) {

  const avgAge = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4).filter((age) => age > 18
  ).reduce((acc, age, _, arr) => acc + age / arr.length
    , 0)
  console.log(avgAge);

};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
*/