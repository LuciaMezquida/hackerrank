"use strict";

//https://www.hackerrank.com/challenges/electronics-shop/problem?h_r=next-challenge&h_v=zen

const getMoneySpent = (keyboards, drives, b) => {
  let expensiveOption = 0;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let sumItems = keyboards[i] + drives[j];
      if (sumItems <= b) {
        if (expensiveOption < sumItems) {
          expensiveOption = sumItems;
        }
      }
    }
  }
  if (expensiveOption === 0) {
    return -1;
  }
  return expensiveOption;
};

//Test
const main = (keyboards, drives, b, response) => {
  let result = getMoneySpent(keyboards, drives, b);
  if (result === response) {
    console.log("ok");
  } else if (result !== response) console.log("not ok");
};
main([40, 50, 60], [5, 8, 12], 60, 58);
main([4], [5], 5, -1);
