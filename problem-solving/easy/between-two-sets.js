"use strict";

//https://www.hackerrank.com/challenges/between-two-sets/problem

function getTotalX(a, b) {
  let numbersInBetween = [];
  const lastNumberFirstArray = a[a.length - 1];
  const firstNumberSecondArray = b[0];
  for (let i = lastNumberFirstArray; i <= firstNumberSecondArray; i++) {
    numbersInBetween.push(i);
  }
  for (let i = 0; i < a.length; i++) {
    numbersInBetween = numbersInBetween.filter((item) => item % a[i] === 0);
  }
  for (let i = 0; i < b.length; i++) {
    numbersInBetween = numbersInBetween.filter((item) => b[i] % item === 0);
  }

  return numbersInBetween.length;
}
function main(a, b, res) {
  let result = getTotalX(a, b);
  if (result === res) {
    console.log("ok");
  } else if (result !== res) console.log("not ok");
}
main([2, 6], [24, 36], 2);
main([2, 4], [16, 32, 96], 3);
