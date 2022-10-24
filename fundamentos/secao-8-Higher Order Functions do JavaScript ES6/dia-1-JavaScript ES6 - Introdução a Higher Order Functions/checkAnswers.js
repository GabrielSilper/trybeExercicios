function test(arrayRight, arrayAnswers, callback) {
    return callback(arrayRight,arrayAnswers); 
}

const robot = (rightAnswers, studentAnswers) => {
    let totalPoints = 0;
    for (let i = 0; i < rightAnswers.length; i+=1) {
        if (studentAnswers[i] === 'N.A') {
            totalPoints += 0;
        }else if (studentAnswers[i] === rightAnswers[i]) {
            totalPoints += 1;
        }else{
            totalPoints -= 0.5;
        }
    }
    return totalPoints;
}

console.log(test(['A','B','C','D'],['A','N.A','F','D'],robot));
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(test(RIGHT_ANSWERS,STUDENT_ANSWERS,robot));