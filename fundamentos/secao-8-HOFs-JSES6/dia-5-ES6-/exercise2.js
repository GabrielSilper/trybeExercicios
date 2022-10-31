const sum = (...rest) =>rest.reduce((acum,curr)=>acum+curr);

console.log(sum(4,5,6));