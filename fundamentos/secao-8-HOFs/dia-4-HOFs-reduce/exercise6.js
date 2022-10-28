const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
  const newArray = grades.map(elem => {
    return elem.reduce ((cum,cur)=>cum+cur)/elem.length;
  });

 return students.reduce((cum,cur,index) =>{
    return cum.concat([{name: cur, average: newArray[index]}]);
  }, []);
}

console.log(studentAverage());

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];




