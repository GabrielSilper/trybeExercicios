function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

  const decemberDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  let listDays = document.querySelector("#days");
  for (const element of decemberDaysList) {
    let day = document.createElement("li");
    day.innerText = ''+element;
    day.className = 'day';
    listDays.appendChild(day);
  }
  
  let sexta = 4;
  for (const element of listDays.children) {
    if (element.innerText == sexta) {
        element.className += ' friday';
        sexta+=7
    }
    if(element.innerText == 24 
        || element.innerText == 25 
        || element.innerText == 31){
            element.className += ' holiday';
    }
  }

// Escreva seu código abaixo.
