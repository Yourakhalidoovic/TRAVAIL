////get value of the three

const inputYear = document.getElementById("year-input");
const inputMonth = document.getElementById("month-input");
const inputDay = document.getElementById("day-input");

////get the button
const button = document.getElementById("button");

button.addEventListener("click", function () {
  const yearValue = inputYear.value;
  const monthValue = inputMonth.value;
  const dayValue = inputDay.value;

  const date = new Date();

  const Year = document.getElementById("year");
  const day = document.getElementById("day");
  const month = document.getElementById("month");
  Year.textContent = date.getFullYear() - Number(yearValue);
});

////event listend onclick btn

////calculer date
