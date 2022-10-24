function raffle(guess,callback) {
    const raffleNumber = Math.floor(Math.random()*5+1);
    return callback(raffleNumber, guess);
}

function verifyGuess(raffleNumber, guess) {
    console.log(`Número sorteado: ${raffleNumber}`);
    console.log(`Número escolhido: ${guess}`);
    if (raffleNumber === guess) return 'Parabens você ganhou';
    return 'Tente novamente'
}

console.log(raffle(2,verifyGuess));
console.log(raffle(3,verifyGuess));
console.log(raffle(4,verifyGuess));