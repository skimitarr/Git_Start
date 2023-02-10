const rule = document.querySelector('.rules');
const mistake = document.querySelector('.mistake');
const tries = document.querySelector('.try');
const number = document.querySelector('.number');
const check = document.querySelector('.check');
const exit = document.querySelector('.exit');
const min = document.querySelector('.min');
const max = document.querySelector('.max');

let computerNumber = null;
let arrOfTries = [];
let counter = 0;

min.addEventListener('change', () => {
  if (min.value && max.value) {
    start();
  }
});
max.addEventListener('change', () => {
  if (min.value && max.value) {
    start();
  }
});

exit.addEventListener('click', exitGame);

function start() {
  if (min.value % 1 == 0 && min.value > 0 && max.value % 1 == 0 && max.value > 0 && max.value > min.value) {
    mistake.style = 'display: none';
    min.disabled = true;
    max.disabled = true;
    console.log('min.value ' + min.value);
    console.log('max.value ' + max.value);
    alert('Привет, я загадал число от min до max вашего диапазона. Попробуй угадать его за 5 попыток!');
    rule.textContent = 'Прошу использовать свою первую попытку путём ввода первого числа и нажать кнопку CHECK';
    computerNumber = Math.floor(Math.random() * (max.value - min.value + 1)) + (+min.value);
    console.log(computerNumber);
    check.addEventListener('click', () => {
      let guess = +number.value;
      if (typeof(guess) === 'number' && guess >= min.value && guess <= max.value && guess % 1 == 0) {
        mistake.style = 'display: none';
        mistake.textContent = '';
        guessNumber(+computerNumber, guess);
      } else {
        mistake.style = 'display: block';
        mistake.textContent = 'Введите корректное число';
      }
    })
  } else {
    mistake.style = 'display: block';
    mistake.textContent = 'Вы ввели неверный диапазон';
  }
}

function guessNumber(num, guess) {
  rule.textContent = 'Используйте свою следующую попытку путём ввода числа и нажмите кнопку CHECK';
  counter++;
  arrOfTries.push(guess);
  let currentTry = arrOfTries[arrOfTries.length - 1];
  let previousTry = arrOfTries[arrOfTries.length - 2] || null;

  if (guess == num) {
    alert(`Поздравляю! Ты угадал задуманное число за ${counter} попыток`);
    window.location.reload();
  }

  if (counter > 1 && counter < 5) {
    tries.style = 'display: block';
    if (Math.abs(num - currentTry) < Math.abs(num - previousTry)) {
      tries.textContent = `Не угадал, но теплее!!! Осталось ${5 - counter} попыток`;
      return
    }
    else if (Math.abs(num - currentTry) == Math.abs(num - previousTry)) {
      tries.textContent = `Не угадал, но ни теплее, ни холоднее!!! Осталось ${5 - counter} попыток`;
      return
    }
    else {
      tries.textContent = `Не угадал, холоднее… Осталось ${5 - counter} попыток`;
      return
    }
  } else if (counter === 5 && guess !== num) {
    alert(`Вы проиграли`);
    window.location.reload();
  }
}

function exitGame () {
  if (confirm('Вы уверены что хотите прервать игру?')) {
    window.location.reload();
  }
}

