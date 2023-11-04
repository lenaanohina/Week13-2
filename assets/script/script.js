function calculateDays() {
  const bdayInput = document.getElementById("bday");
  const bdayValue = bdayInput.value;
  const result = document.getElementById("result");

  if (bdayValue === "") {
    result.textContent = "Пожалуйста, введите дату рождения";
    result.style.color = "#ff5e57";
  }

  const today = new Date();
  const bdayDate = new Date(bdayValue);
  const timeDiff = bdayDate.getTime() - today.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  let resultMessage = "";

  if (daysDiff === 0) {
    resultMessage = "Сегодня Ваш день рождения!";
  } else if (daysDiff < 0) {
    resultMessage = `Ваш день рождения был ${Math.abs(daysDiff)} ${numToWord(
      Math.abs(daysDiff),
      "день",
      "дня",
      "дней"
    )} назад.`;
  } else {
    resultMessage = `До вашего дня рождения осталось ${daysDiff} ${numToWord(
      daysDiff,
      "день",
      "дня",
      "дней"
    )}.`;
  }

  result.textContent = resultMessage;
}

// Функция для определения склонения слова в зависимости от числа
function numToWord(num, formFor1, formFor234, formForOther) {
  num = Math.abs(num) % 100;
  let word = formForOther;
  if (num >= 5 && num <= 20) {
    word = formForOther;
  } else {
    num = num % 10;
    if (num === 1) {
      word = formFor1;
    } else if (num >= 2 && num <= 4) {
      word = formFor234;
    }
  }
  return word;
}

const button = document.getElementById("btn");
button.addEventListener("click", calculateDays);
