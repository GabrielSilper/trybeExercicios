let numbers = [2,4,6];
let cont = 0;

for (let element of numbers) {
    if(element%2!==0){
        cont++;
    }
}

if(cont>0){
    console.log('A quantidade de números ímpares é: '+cont);
}else{
    console.log('Não existem números ímpares');
}
