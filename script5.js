// Одномерные массивы

// Задание 1

function getMinOfArray(arr) {
  let min = Math.min(...arr);
  console.log(min);
}
getMinOfArray([1, 22, 56, 7, 9, 4, 21, 57]);
console.log('----------------------------------------------------------');

// Задание 2

function getMaxOfArray(arr) {
  let max = Math.max(...arr);
  console.log(max);
}
getMaxOfArray([1, 22, 56, 7, 9, 4, 21, 57]);
console.log('----------------------------------------------------------');

// Задание 3

function getMaxIndexOfArray(arr) {
  // 1 вариант
  console.log(arr.indexOf(arr[arr.length - 1]));

  // 2 вариант
  let indexes = [];
  let max = 0;
  for (let i of arr) {
    indexes.push(arr.indexOf(i));
    max = Math.max(...indexes);
  }
  console.log(max);
}
getMaxIndexOfArray([1, 22, 56, 7, 9, 4, 21, 57]);
console.log('----------------------------------------------------------');

// Задание 4

function getMinIndexOfArray(arr) {
  // 1 вариант
  console.log(arr.indexOf(arr[0]));

  // 2 вариант
  let indexes = [];
  let min = 0;
  for (let i of arr) {
    indexes.push(arr.indexOf(i));
    min = Math.min(...indexes);
  }
  console.log(min);
}
getMinIndexOfArray([1, 22, 56, 7, 9, 4, 21, 57]);
console.log('----------------------------------------------------------');

// Задание 5

function getSumOfOdd(arr) {
  let indexes = [];
  for (let i of arr) {
    if (arr.indexOf(i) % 2 !== 0) {
      indexes.push(i);
    }
  }
  let result = indexes.reduce((sum, current) => sum + current, 0)
  console.log(result);
}
getSumOfOdd([1, 22, 56, 7, 9, 4]);
console.log('----------------------------------------------------------');

// Задание 6

function reverseOfArr(arr) {
  let result = arr.reverse();
  console.log(result);
}
reverseOfArr([1, 22, 56, 7, 9, 4]);
console.log('----------------------------------------------------------');

// Задание 7

function countOfOdd(arr) {
  let indexes = [];
  for (let i of arr) {
    if (i % 2 !== 0) {
      indexes.push(i);
    }
  }
  let result = indexes.length;
  console.log(result);
}
countOfOdd([1, 22, 56, 7, 9, 4]);
