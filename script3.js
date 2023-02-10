// Условные операторы

// Задание 1

function myFunction(a, b) {
  if (typeof(a) === 'number' && typeof(b) === 'number') {
    if (a % 2 == 0) {
      let result = a * b;
      console.log(result);
    } else {
      let result = a + b;
      console.log(result);
    }
  } else {
    console.log('переданы не числа');
  }
}
myFunction(13, 2);
myFunction('13', 2);

// Задание 2

function findQuarter(x, y) {
  if (typeof(x) === 'number' && typeof(y) === 'number') {
    if (x < 0 && y > 0) {
      console.log('Точка принадлежит 1 четверти');
    } else if (x > 0 && y > 0) {
      console.log('Точка принадлежит 2 четверти');
    } else if (x < 0 && y < 0) {
      console.log('Точка принадлежит 3 четверти');
    } else if (x > 0 && y < 0) {
      console.log('Точка принадлежит 4 четверти');
    } else {
      console.log('Точка принадлежит оси координат');
    }
  } else {
    console.log('переданы не числа');
  }
}
findQuarter(1,-1);
findQuarter(-2, 4);
findQuarter(0, 3);
findQuarter('0', 3);

// Задание 3

function sumPositive(arr) {
// 2 варианта. В первом созадем новый массив, во втором меняем существующий

  // let positives = [];
  // arr.forEach(element => {
  //   if (element > 0) {
  //     positives.push(element)
  //   }
  // });
  // let result1 = positives.reduce((sum, current) => sum + current, 0);
  // console.log(result1);

  arr.forEach(element => {
    if (element <= 0) {
      arr.splice(arr.indexOf(element), 1)
    }
  });
  let result2 = arr.reduce((sum, current) => sum + current, 0);
  console.log(result2);
}
sumPositive([-2, 4, 7, -9, 2, 0]);

// Задание 4

function findMax(a,b,c) {
  let result = Math.max((a*b*c), (a+b+c)) + 3;
  console.log(result);
}
findMax(1,2,1);
findMax(3,4,1);
