let array = ["java", "javascript", "python", "html", "css"];

biggerWord = array[0];
biggerWordLength = biggerWord.length;
smallerWord = array[0];
smallerWordLength = smallerWord.length;

for (let index = 1; index < array.length; index++) {
  word = array[index];
  if (word.length > biggerWord.length) {
    biggerWord = word;
    biggerWordLength = biggerWord.length;
  }
}

for (let index = 1; index < array.length; index++) {
    word = array[index];
    if (word.length < biggerWord.length) {
      smallerWord = word;
      smallerWordLength = smallerWord.length;
    }
  }



console.log('Maior palavra do array é',biggerWord);
console.log('Menor palavra do array é',smallerWord);
