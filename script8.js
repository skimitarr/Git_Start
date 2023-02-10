// Как натренировать своего дракона

function isPossibleToGiveChange(banknotesArray) {
  let cashbox = [];
  for (let i of banknotesArray) {
    i = +i;
    if (i === 25) {
      cashbox.push(i);
    }

    if (i === 50) {
      if (cashbox.indexOf(25) !== -1) {
        cashbox.splice(cashbox.indexOf(25), 1);
        cashbox.push(i);
      } else {
        return false;
      }
    }

    if (i === 100) {
      if (cashbox.indexOf(25) !== -1 && cashbox.indexOf(50) !== -1) {
        cashbox.splice(cashbox.indexOf(25), 1);
        cashbox.splice(cashbox.indexOf(50), 1);
        cashbox.push(i);
      } else {
        return false;
      }
    }
  }

  return true;
}

console.log(isPossibleToGiveChange([25, 25, 50])); // => true
console.log(isPossibleToGiveChange([25, 100])); // => false
console.log(isPossibleToGiveChange([25, 25, 50, 100])); // => true
console.log(isPossibleToGiveChange([25, 50, 100])); // => false
console.log(isPossibleToGiveChange(['25', '25', '50', '100'])); // => true
console.log(isPossibleToGiveChange(['25', '50', '100'])); // => false
