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

// Escreva seu código abaixo.
//Parte 1
const decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
let listDays = document.querySelector("#days");
for (const element of decemberDaysList) {
  let day = document.createElement("li");
  day.innerText = "" + element;
  day.className = "day";
  listDays.appendChild(day);
}

let sexta = 4;
for (const element of listDays.children) {
  if (element.innerText == sexta) {
    element.className += " friday";
    sexta += 7;
  }
  if (
    element.innerText == 24 ||
    element.innerText == 25 ||
    element.innerText == 31
  ) {
    element.className += " holiday";
  }
}

//Parte 2
function makeBtnHoliday(feriado) {
  let btnHoliday = document.createElement("button");
  btnHoliday.id = "btn-holiday";
  btnHoliday.innerHTML = feriado;
  let container = document.querySelector(".buttons-container");
  container.appendChild(btnHoliday);
}

makeBtnHoliday("Feriados");

//Parte 3
function changeColorHoliday() {
  let diasFeriados = document.querySelectorAll(".holiday");
  for (let elemento of diasFeriados) {
    if (elemento.style.backgroundColor !== "lightgreen") {
      elemento.style.backgroundColor = "lightgreen";
    } else if (elemento.style.backgroundColor === "lightgreen") {
      elemento.style.backgroundColor = "rgb(238,238,238)";
    }
  }
}

let btnFeriados = document.querySelector("#btn-holiday");
btnFeriados.addEventListener("click", changeColorHoliday);

//Parte 4
function makeBtnFriday(textFriday) {
  let btnFriday = document.createElement("button");
  btnFriday.id = "btn-friday";
  btnFriday.innerHTML = textFriday;
  let container = document.querySelector(".buttons-container");
  container.appendChild(btnFriday);
}
makeBtnFriday("Sexta-feira");

//Parte 5

function sextou() {
  let sextas = document.querySelectorAll(".friday");
  for (let elemento of sextas) {
    if (elemento.innerText !== "Sexta-Feira") {
      elemento.innerText = "Sexta-Feira";
    } else if (elemento.innerText === "Sexta-Feira") {
      let diaAnterior = elemento.previousElementSibling.innerText;
      elemento.innerText = parseInt(diaAnterior) + 1 + "";
    }
  }
}
let btnFriday = document.querySelector("#btn-friday");
btnFriday.addEventListener("click", sextou);

//Parte 6
function zoomIn(event) {
  event.target.style.fontSize = "25px";
}

function zoomOff(event) {
  event.target.style.fontSize = "";
}

for (let day of listDays.children) {
  day.addEventListener("mouseenter", zoomIn);
  day.addEventListener("mouseout", zoomOff);
  day.addEventListener("click", addColorTask);
}

//Parte 7
function addTask(whatTask) {
  let task = document.createElement("span");
  task.innerHTML = " " + whatTask + ":";
  let myTasks = document.querySelector(".my-tasks");
  myTasks.appendChild(task);
}

addTask("Cozinhar");
addSubtitle("red");
addTask("Jogar");
addSubtitle("blue");
addTask("Pular");
addSubtitle("green");

//Parte 8
function addSubtitle(color) {
  let subtitle = document.createElement("div");
  subtitle.className = "task";
  subtitle.style.backgroundColor = color;
  let myTasks = document.querySelector(".my-tasks");
  myTasks.appendChild(subtitle);
}

//Parte 9
function taskSelected(event) {
  let tarefaSelecionada = event.target;
  let tasks = document.querySelectorAll(".task");
  if (tarefaSelecionada.className === "task") {
    for (const iterator of tasks) {
      iterator.className = "task";
      iterator.style.width = "35px";
      iterator.style.height = "35px";
      iterator.style.border = "1px solid black";
    }
    tarefaSelecionada.className += " selected";
    tarefaSelecionada.style.width = "45px";
    tarefaSelecionada.style.height = "45px";
    tarefaSelecionada.style.border = "3px solid gray";
  } else {
    tarefaSelecionada.className = "task";
    tarefaSelecionada.style.width = "35px";
    tarefaSelecionada.style.height = "35px";
    tarefaSelecionada.style.border = "1px solid black";
  }
}

let tasks = document.querySelectorAll(".task");
for (const iterator of tasks) {
  iterator.addEventListener("click", taskSelected);
}

//Parte 10
function addColorTask(event) {
  let diaSelecionado = event.target;
  let tarefas = document.querySelectorAll(".task");
  for (const tarefa of tarefas) {
    if (tarefa.className === "task selected") {
      if (diaSelecionado.style.color !== tarefa.style.backgroundColor) {
        diaSelecionado.style.color = tarefa.style.backgroundColor;
      } else if (diaSelecionado.style.color === tarefa.style.backgroundColor) {
        diaSelecionado.style.color = "rgb(119,119,119)";
      }
    }
  }
}

//Bônus
function addAppointment(event) {
  let key = event.keyCode;
  let inputAppointment = document.querySelector("#task-input");
  let taskList = document.querySelector(".task-list");
  let appointment = inputAppointment.value;
  let item = document.createElement("li");

  item.innerText = appointment;
  taskList.appendChild(item);
  inputAppointment.value = "";
}

function addAppointmentEnter(event) {
  let key = event.keyCode;
  if (key == 13) {
    let inputAppointment = document.querySelector("#task-input");
    let taskList = document.querySelector(".task-list");
    let appointment = inputAppointment.value;
    let item = document.createElement("li");

    item.innerText = appointment;
    taskList.appendChild(item);
    inputAppointment.value = "";
  }
}

let btnAdd = document.querySelector("#btn-add");
btnAdd.addEventListener("click", addAppointment);
let inputAppointment = document.querySelector("#task-input");
inputAppointment.addEventListener("keypress", addAppointmentEnter);
