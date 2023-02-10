// Циклы

// Задание 1

function myFunction(a, b) {
  let even = [];
  let counter = 0;
  for (i = a; i <= b; i++) {
    if (i % 2 == 0) {
      even.push(i);
      counter ++;
    }
  }
  let sumEven = even.reduce((sum, current) => sum + current, 0)
  console.log('Сумма четных чисел в диапазоне равна: ' + sumEven);
  console.log('Количество четных чисел в диапазоне равно ' + counter);
}
myFunction(3, 5);
console.log('----------------------------------------------------------');

// Задание 2

function isPrime(num) {
  let result = null;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      result = false;
      console.log(result);
      return result;
    } else {
      result = true;
    }
  }
  console.log(result);
}
isPrime(7);
isPrime(9);
console.log('----------------------------------------------------------');

// Задание 3

function getSqrtBySequentialSelection(num) {
  for (i = 1; i < num ; i++) {
    if (i*i === num) {
      return i;
    }
  }
}
console.log(getSqrtBySequentialSelection(16));

// 1 вариант
function getSqrtByBinarySearch(num, start = 0, end = num) {
  let middle = Math.ceil((start + end) / 2);

  if (middle * middle === num) {
    return middle;
  }

  if (middle * middle > num) {
    end = middle;
  }
  else {
    start = middle;
  }

  return getSqrtByBinarySearch(num, start, end);
}
console.log(getSqrtByBinarySearch(16641));

// 2 вариант
// function getSqrtByBinarySearch(number) {
//   let start = 0, end = number;
//   let mid;
//   let ans = 0;

//   while (start <= end) {
//     mid = Math.ceil((start + end) / 2);
//     if (mid * mid == number) {
//       ans = mid;
//       break;
//     }
//     if (mid * mid < number) {
//         start = mid + 1;
//         ans = mid;
//     } else {
//       end = mid - 1;
//     }
//   }

//   for (let i = 0; i < number; i++) {
//       while (ans * ans <= number) {
//         ans ++;
//       }
//       ans --;
//   }
//   return ans;
// }
// console.log(getSqrtByBinarySearch(25));
// console.log(getSqrtByBinarySearch(16641));

console.log('----------------------------------------------------------');

// Задание 4

function getFactorial(num) {
  let result = 1;
  for (i=1; i<=num; i++) {
    result *= i;
  }
 console.log(result);
}
getFactorial(4);
getFactorial(5);
console.log('----------------------------------------------------------');

// Задание 5

function digitSum(y) {
  // 1 способ выполняется циклом

  // let letters = Array.from(String(y));
  // let numbers = [];
  // for (let i of letters) {
  //   i = +i;
  //   numbers.push(i);
  // }
  // let sum = numbers.reduce((sum, current) => sum + current);
  // console.log(sum);

  // 2 способ

  let numbers = Array.from(String(y)).map(item => item = +item);
  let sum = numbers.reduce((sum, current) => sum + current);
  console.log(sum);
}
digitSum(128);
digitSum(1);
digitSum(5659);

