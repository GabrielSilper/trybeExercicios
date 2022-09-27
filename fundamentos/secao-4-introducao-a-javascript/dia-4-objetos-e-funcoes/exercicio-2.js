function indexBigger(array) {
    let bigger = 0;
    let i = 0
    for (let index in array) {
        if (array[index]>bigger) {
            bigger=array[index]
            i=index;
        }
    }
    return i;
}

teste = [2, 3, 6, 7, 10, 1];
console.log(indexBigger(teste));
