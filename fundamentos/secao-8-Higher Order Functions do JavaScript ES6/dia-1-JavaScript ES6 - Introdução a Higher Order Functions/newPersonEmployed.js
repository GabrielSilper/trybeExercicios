const newEmployees = (emp1, emp2, emp3, callback) => {
  const employees = {
    id1: callback(emp1), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback(emp2), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback(emp3), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

const generateEmail = (person) => {
  const bodyEmail = person.split(" ").join("");
  return `${bodyEmail}@trybe.com`;
};

const signEmployer = (employer) => ({
  employer,
  email: generateEmail(employer),
});

const list = newEmployees("Pedro Guerra", "Luiza Drumond", "Carla Paiva", signEmployer);
console.log(list);
