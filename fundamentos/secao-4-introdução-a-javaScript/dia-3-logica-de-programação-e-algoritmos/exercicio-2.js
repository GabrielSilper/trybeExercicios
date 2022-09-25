let word = 'trybera';
let newWord='';
let aux = [];
let numberOfChanges;

for (let index = 0; index < word.length; index++) {
    aux.push(index+1);
}



if(word.length%2==0){
    numberOfChanges = word.length/2;
    for (let index = 0; index < word.length; index++) {
        aux[index] = word[word.length-1-index];
        aux[word.length-1-index] = word[index];
    }
    for (let index = 0; index < aux.length; index++) {
        newWord+=aux[index];
    }
}else{
    numberOfChanges = (word.length-1)/2;
    for (let index = 0; index < word.length; index++) {
        aux[index] = word[word.length-1-index];
        aux[word.length-1-index] = word[index];
    }
    aux[numberOfChanges]=word[numberOfChanges];
    for (let index = 0; index < aux.length; index++) {
        newWord+=aux[index];
    }
}

console.log(newWord);