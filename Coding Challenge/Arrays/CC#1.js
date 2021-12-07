//CODING CHALLENGE 1

const checkDogs = function (dogsJulia, dogsKate) {

  //task 1
  const copyDogsJulia = dogsJulia;//create a shallow copy to not alter the passed argument
  copyDogsJulia.splice(0, 1);//remove the first cat
  copyDogsJulia.splice(-2);//the last two cats

  //task 2
  const bothArrays = dogsJulia.concat(dogsKate);//creating a new array with both dogs arrays

  //task 3
  bothArrays.forEach(function (dog, i) {
    if (dog >= 3)
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old .`);
    else
      console.log(`Dog number ${i + 1} is still a puppy 🐶 .`);
  })

}

//task 4
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);