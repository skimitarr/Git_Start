// Функции

// Задание 1

function getWeekDay(num) {
  switch (num) {
    case 1:
      console.log('Понедельник');
      break;
    case 2:
      console.log('Вторник');
      break;
    case 3:
      console.log('Среда');
      break;
    case 4:
      console.log('Четверг');
      break;
    case 5:
      console.log('Пятница');
      break;
    case 6:
      console.log('Суббота');
      break;
    case 7:
      console.log('Воскресенье');
      break;
  }
}
getWeekDay(1);
getWeekDay(7);
console.log('----------------------------------------------------------');

// Задание 2

function getDistance(obj1, obj2) {
  let distX = Math.abs(obj1.x - obj2.x);
  let distY = Math.abs(obj1.y - obj2.y);
  let totalDist = Math.sqrt(distX**2 + distY**2);
  console.log(totalDist);
}
getDistance({x:5,y:-3},{x:6,y:4});
console.log('----------------------------------------------------------');

// Задание 3

// Вариант 1
function numbersToWords(num) {

  let singles = {
    1: 'один',
    2: 'два',
    3: 'три',
    4: 'четыре',
    5: 'пять',
    6: 'шесть',
    7: 'семь',
    8: 'восемь',
    9: 'девять',
  }

  let dozens = {
    1: 'десять',
    2: 'двадцать',
    3: 'тридцать',
    4: 'сорок',
    5: 'пятьдесят',
    6: 'шестьдесят',
    7: 'семьдесят',
    8: 'восемьдесят',
    9: 'девяносто',
  }

  let hundreds = {
    1: 'сто',
    2: 'двести',
    3: 'триста',
    4: 'четыреста',
    5: 'пятьсот',
    6: 'шестьсот',
    7: 'семьсот',
    8: 'восемьсот',
    9: 'девятьсот',
  }

  let exceptions = {
    11:'одиннадцать',
    12:'двенадцать',
    13:'тринадцать',
    14:'четырнадцать',
    15:'пятнадцать',
    16:'шестнадцать',
    17:'семнадцать',
    18:'восемнадцать',
    19:'девятнадцать',
  }

  let first = '';
  let middle = '';
  let last = '';

  let numbers = Array.from(String(num)).map(item => item = +item);
  let single = numbers[numbers.length - 1];
  let dozen = numbers[numbers.length - 2];
  let hundred = numbers[numbers.length - 3];
  let exception = +Array.from(String(num)).slice(-2).join('');

  if (single) {
    last = singles[single];
  }

  if (dozen) {
    middle = dozens[dozen];
    if (dozen === 1 && single !== 0) {
      middle = exceptions[exception];
      last = '';
    }
  }

  if (hundred) {
    first = hundreds[hundred];
  }

  let result = (first + ' ' + middle + ' ' + last)
  console.log(result);
}
numbersToWords(25);
numbersToWords(243);
numbersToWords(21);
numbersToWords(11);
numbersToWords(917);
numbersToWords(700);
numbersToWords(110);

// Вариант 2

// function numbersToWords(num) {
//   let first = '';
//   let middle = '';
//   let last = '';
//   let numbers = Array.from(String(num)).map(item => item = +item);
//   let eleven = +Array.from(String(num)).slice(-2).join('');

//   if (numbers[numbers.length - 1]) {
//     switch (numbers[numbers.length - 1]) {
//       case 1:
//         last = 'один';
//         break;
//       case 2:
//         last = 'два';
//         break;
//       case 3:
//         last = 'три';
//         break;
//       case 4:
//         last = 'четыре';
//         break;
//       case 5:
//         last = 'пять';
//         break;
//       case 6:
//         last = 'шесть';
//         break;
//       case 7:
//         last = 'семь';
//         break;
//       case 8:
//         last = 'восемь';
//         break;
//       case 9:
//         last = 'девять';
//         break;
//       case 0:
//         break;
//     }
//   }

//   if (numbers[numbers.length - 2]) {
//     switch (numbers[numbers.length - 2]) {
//       case 1:
//         middle = 'десять';
//         break;
//       case 2:
//         middle = 'двадцать';
//         break;
//       case 3:
//         middle = 'тридцать';
//         break;
//       case 4:
//         middle = 'сорок';
//         break;
//       case 5:
//         middle = 'пятьдесят';
//         break;
//       case 6:
//         middle = 'шестьдесят';
//         break;
//       case 7:
//         middle = 'семдесят';
//         break;
//       case 8:
//         middle = 'восемдесят';
//         break;
//       case 9:
//         middle = 'девяносто';
//         break;
//       case 0:
//         break;
//     }
//   }

//   if (numbers[numbers.length - 3]) {
//     switch (numbers[numbers.length - 3]) {
//       case 1:
//         first = 'сто';
//         break;
//       case 2:
//         first = 'двести';
//         break;
//       case 3:
//         first = 'триста';
//         break;
//       case 4:
//         first = 'четыреста';
//         break;
//       case 5:
//         first = 'пятьсот';
//         break;
//       case 6:
//         first = 'шестьсот';
//         break;
//       case 7:
//         first = 'семьсот';
//         break;
//       case 8:
//         first = 'восемьсот';
//         break;
//       case 9:
//         first = 'девятьсот';
//         break;
//     }
//   }

//   if (eleven) {
//     switch (eleven) {
//       case 11:
//         middle = 'одинадцать';
//         last = '';
//         break;
//       case 12:
//         middle = 'двенадцать';
//         last = '';
//         break;
//       case 13:
//         middle = 'тринадцать';
//         last = '';
//         break;
//       case 14:
//         middle = 'четырнадцать';
//         last = '';
//         break;
//       case 15:
//         middle = 'пятнадцать';
//         last = '';
//         break;
//       case 16:
//         middle = 'шестнадцать';
//         last = '';
//         break;
//       case 17:
//         middle = 'семнадцать';
//         last = '';
//         break;
//       case 18:
//         middle = 'восемнадцать';
//         last = '';
//         break;
//       case 19:
//         middle = 'девятнадцать';
//         last = '';
//         break;
//     }
//   }

//   console.log(`${first} ${middle} ${last}`);
// }
// numbersToWords(25);
// numbersToWords(243);
// numbersToWords(21);
// numbersToWords(11);
// numbersToWords(917);
// numbersToWords(700);
console.log('----------------------------------------------------------');

// Задание 4

function wordsToNumbers(str) {

  let singles = {
    'один': '1',
    'два': '2',
    'три': '3',
    'четыре': '4',
    'пять': '5',
    'шесть': '6',
    'семь': '7',
    'восемь': '8',
    'девять': '9',
    'десять': '10',
    'одиннадцать': '11',
    'двенадцать': '12',
    'тринадцать': '13',
    'четырнадцать': '14',
    'пятнадцать': '15',
    'шестнадцать': '16',
    'семнадцать': '17',
    'восемнадцать': '18',
    'девятнадцать': '19',
    'двадцать': '20',
    'тридцать': '30',
    'сорок': '40',
    'пятьдесят': '50',
    'шестьдесят': '60',
    'семьдесят': '70',
    'восемьдесят': '80',
    'девяносто': '90',
  }

  let dozens = {
    'десять': '1',
    'двадцать': '2',
    'тридцать': '3',
    'сорок': '4',
    'пятьдесят': '5',
    'шестьдесят': '6',
    'семьдесят': '7',
    'восемьдесят': '8',
    'девяносто': '9',
  }

  let hundreds = {
    'сто': '1',
    'двести': '2',
    'триста': '3',
    'четыреста': '4',
    'пятьсот': '5',
    'шестьсот': '6',
    'семьсот': '7',
    'восемьсот': '8',
    'девятьсот': '9',
  }

  let first = '';
  let middle = '';
  let last = '';

  let numbers = str.toLowerCase().split(' ');
  let single = numbers[numbers.length - 1];
  let dozen = numbers[numbers.length - 2];
  let hundred = numbers[numbers.length - 3] || numbers[0];

  if (single) {
    last = singles[single];
  }

  if (dozen) {
    middle = dozens[dozen];
    if (middle === undefined) {
      middle = singles[single];
      last = '';
    }
  }

  if (hundred) {
    first = hundreds[hundred];
    if (first === undefined) {
      first = '';
    }
  }

  let result = +(first+middle+last)
  console.log(result);
}
wordsToNumbers('Двадцать пять');
wordsToNumbers('Триста сорок три');
wordsToNumbers('десять');
wordsToNumbers('Триста десять');
wordsToNumbers('пятьсот одиннадцать');
wordsToNumbers('тринадцать');
wordsToNumbers('сорок');
wordsToNumbers('пятьсот сорок один');


