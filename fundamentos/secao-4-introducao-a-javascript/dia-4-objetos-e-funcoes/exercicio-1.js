function palindromeVerify(word) {
    let cont =0;
    let arrayByWord = word.split('');
    let reverseArray = word.split('');
    reverseArray.reverse();
    
    for (let key in arrayByWord) {
        if (arrayByWord[key]===reverseArray[key]) {
            cont++;
        }
    }
    if (cont===word.length) {
        return true;
    } else {
        return false;
    }
}

console.log(palindromeVerify('ovo'));
