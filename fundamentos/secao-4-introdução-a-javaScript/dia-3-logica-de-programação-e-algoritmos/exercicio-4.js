// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

end=50;
biggerPrimeNumber=2;

for (let index = 2; index <= end; index++) {
    let cont = 0;
    for(let i=1; i<=index;i++){
        if(index%i==0){
            cont++;
        }
    }
    if (cont===2 && index>biggerPrimeNumber) {
        biggerPrimeNumber = index;
    }
}

console.log('O maior número primo de 2 até',end,'é',biggerPrimeNumber);