const toCamel = function (bigWord) {
  const words = bigWord.split('\n');
  let i = 1, maxLen = 0;

  for (const x of words) {
    if (x.length > maxLen)
      maxLen = x.length;
  }
  for (const word of words) {
    const [word1, word2] = word.toLowerCase().split('_');
    let cameledWord = word1 + (word2[0]).toUpperCase() + word2.slice(1);

    cameledWord = cameledWord.padEnd(maxLen + 5, ' ');
    console.log(cameledWord, '✅'.repeat(i));
    i++;
  }
}


toCamel('underscore_case\nfirst_name\nSome_Variable\ncalculate_AGE\ndelayed_departure');

const textArea = document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  const words = text.split('\n');
  let i = 1, maxLen = 0;

  for (const x of words) {
    if (x.length > maxLen)
      maxLen = x.length;
  }
  for (const word of words) {
    const [word1, word2] = word.toLowerCase().trim().split('_');
    let cameledWord = word1 + (word2[0]).toUpperCase() + word2.slice(1);

    cameledWord = cameledWord.padEnd(maxLen + 5, ' ');
    console.log(cameledWord, '✅'.repeat(i));
    i++;
  }
})
