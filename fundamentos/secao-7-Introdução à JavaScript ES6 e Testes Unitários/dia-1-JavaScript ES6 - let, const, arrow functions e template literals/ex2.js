const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length-1; j++) {
           if(array[j]>array[j+1]){
            const aux = array[j];
            array[j] = array[j+1];
            array[j+1] = aux;
           }
        }        
    }
    return array;
} 
function compareNumbers(a, b) {
    return a - b;
}



console.log(oddsAndEvens); // será necessário alterar essa linha 😉
console.log(sortOddsAndEvens(oddsAndEvens));
console.log(`Os números ${sortOddsAndEvens(oddsAndEvens).join(", ")} se encontram em ordem crescente!`);
console.log(oddsAndEvens.sort(compareNumbers));