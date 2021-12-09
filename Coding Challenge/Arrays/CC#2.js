//CODING CHALLENGE 2
//task 1

const calcAverageHumanAge = function (ages) {

  console.log(ages);

  //task 1'
  const humanYears = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
  console.log(`Dog ages in human ages: ${humanYears}`);

  //task 1''
  const adultDogs = humanYears.filter(function (age) {
    return age >= 18;
  })
  console.log(`Dogs that are at least 18 human years ${adultDogs} `);

  //task 1'''
  const avgAge = adultDogs.reduce(function (acc, age) {
    return acc + age;
  }, 0) / adultDogs.length;
  console.log(avgAge);

};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);