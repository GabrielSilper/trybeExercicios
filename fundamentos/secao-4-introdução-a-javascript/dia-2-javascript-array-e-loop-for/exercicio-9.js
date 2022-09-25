let array = [];

for (let index = 1; index < 26; index++) {
    array.push(index);
}

let arrayDividedBy2 = [];

for (let index = 0; index < array.length; index++) {
    arrayDividedBy2.push(array[index]/2);
}

console.log(arrayDividedBy2)