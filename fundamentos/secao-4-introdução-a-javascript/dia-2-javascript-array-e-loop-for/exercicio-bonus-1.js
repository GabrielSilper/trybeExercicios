let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index++) {   
    for (let i = 0; i < numbers.length-1; i++) {
        if(numbers[i]>numbers[i+1]){
            aux = numbers[i];
            numbers[i]=numbers[i+1];
            numbers[i+1]=aux;
        }
    }
}

console.log(numbers)


    

    
