const month = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
const numDays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
const day = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const days = document.querySelector("#days");
const yearSpan = document.querySelector("#year");
const monthSpan = document.querySelector("#month");
const buttonNextMonth = document.querySelector("#next");
const buttonPrevMonth = document.querySelector("#prev");

document.addEventListener("DOMContentLoaded", function () {
  createEmptysDays(beginMonth(date.getFullYear(), date.getMonth()));
  checkDateForCorrectness();
  highLightСurrentDay(Number(yearSpan.innerHTML), month.indexOf(monthSpan.innerHTML), Number(date.getDate()))
});

const date = new Date();
yearSpan.innerHTML = date.getFullYear();
monthSpan.innerHTML = month[Number(date.getMonth())];

buttonNextMonth.addEventListener("click", nextDate);
// Увеличивает месяц на 1
function nextMonth() {
  let monthNum = month.indexOf(monthSpan.innerHTML);
  monthNum = +monthNum + 1;
  monthSpan.innerHTML = month[monthNum];
}
//Увеличивает год на 1
function nextYear() {
  let yearNum = Number(yearSpan.innerHTML) + 1;
  yearSpan.innerHTML = yearNum;
}
//Меняет месяц и если нужно год на следующий
function nextDate() {
  let num = month.indexOf(monthSpan.innerHTML);
  if (num >= month.length - 1) {
    nextYear();
    monthSpan.innerHTML = month[0];
  } else {
    nextMonth();
  }
  clearDays()
  createEmptysDays(beginMonth(Number(yearSpan.innerHTML),month.indexOf(monthSpan.innerHTML)));
  checkDateForCorrectness();
  highLightСurrentDay(Number(yearSpan.innerHTML), month.indexOf(monthSpan.innerHTML), Number(date.getDate()))
}

buttonPrevMonth.addEventListener("click", prevDate);

//Уменьшает месяц на 1
function prevMonth() {
  let monthNum = month.indexOf(monthSpan.innerHTML);
  monthNum = +monthNum - 1;
  monthSpan.innerHTML = month[monthNum];
}
//Уменьшает год на 1
function prevYear() {
  let yearNum = Number(yearSpan.innerHTML) - 1;
  yearSpan.innerHTML = yearNum;
}
//Меняет месяц и если нужно год на предыдущий
function prevDate() {
  let num = month.indexOf(monthSpan.innerHTML);
  if (num <= 0) {
    prevYear();
    monthSpan.innerHTML = month[month.length - 1];
  } else {
    prevMonth();
  }
  clearDays()
  createEmptysDays(beginMonth(Number(yearSpan.innerHTML),month.indexOf(monthSpan.innerHTML)));
  checkDateForCorrectness();
  highLightСurrentDay(Number(yearSpan.innerHTML), month.indexOf(monthSpan.innerHTML), Number(date.getDate()))
}
// С какого дня недели начинается месяц
function beginMonth(year, month) {
  let date = new Date(year, month);
  return numDays[date.getDay()];
}
//Создает пустые ячейки
function createEmptysDays(firstDay) {
  if (firstDay == "Вт") {
    for (let i = 0; i < 1; i++) {
      let day = document.createElement("div");
      day.setAttribute("class", "day other");
      days.appendChild(day);
    }
  }

  if (firstDay == "Ср") {
    for (let i = 0; i < 2; i++) {
      let day = document.createElement("div");
      day.setAttribute("class", "day other");
      days.appendChild(day);
    }
  }

  if (firstDay == "Чт") {
    for (let i = 0; i < 3; i++) {
      let day = document.createElement("div");
      day.setAttribute("class", "day other");
      days.appendChild(day);
    }
  }

  if (firstDay == "Пт") {
    for (let i = 0; i < 4; i++) {
      let day = document.createElement("div");
      day.setAttribute("class", "day other");
      days.appendChild(day);
    }
  }

  if (firstDay == "Сб") {
    for (let i = 0; i < 5; i++) {
      let day = document.createElement("div");
      day.setAttribute("class", "day other");
      days.appendChild(day);
    }
  }

  if (firstDay == "Вс") {
    for (let i = 0; i < 6; i++) {
      let day = document.createElement("div");
      day.setAttribute("class", "day other");
      days.appendChild(day);
    }
  }
}
//Проверка даты на корректность
function checkDate(year, month, day) {
  let date = new Date(year, month - 1, day);
  if (
    date.getFullYear() == year &&
    date.getMonth() == month - 1 &&
    date.getDate() == day
  ) {
    return true;
  } else {
    return false;
  }
}

//Создает ячейки с датами
function createDiv(param) {
  for (let i = 1; i <= param; ++i) {
    let div = document.createElement("div");
    div.setAttribute("class", "day");
    div.setAttribute("id", i);
    div.innerHTML = i;
    days.appendChild(div);
  }
}

//Проверяет дату на корректность и если она верна создает нужное кол-во ячеек
function checkDateForCorrectness() {
  let checkYear = Number(yearSpan.innerHTML);
  let checkMonth = month.indexOf(monthSpan.innerHTML);
  for (let i = 31; i >= 28; i--) {
    if (checkDate(checkYear, checkMonth + 1, i)) {
      createDiv(i);
      break;
    }
  }
}
// Удаляет все дни
function clearDays() {
  days.innerHTML = ''
}

//Выделяет сегодняшнюю дату
function highLightСurrentDay(year, month, day) {
  if (year == date.getFullYear() && month == date.getMonth()){
     let cell = document.getElementById(day)
     cell.setAttribute('class', 'day highlight')
     cell.style.backgroundColor = 'black'
     cell.style.color = 'white'
  }
}