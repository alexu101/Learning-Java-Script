/*Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/

const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 92;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnWeight ** 2;

const markHigherBMI = markBMI > johnBMI;
if (markHigherBMI)
    console.log(`Mark has a higher BMI. His BMI is ${markBMI.toFixed(2)} and is higher then John's`);
else
    console.log(`John has a higher BMI. His BMI is ${johnBMI.toFixed(2)} and is higher then Mark's`);