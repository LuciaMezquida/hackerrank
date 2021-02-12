"use strict";

//https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(candles) {
  const maxNum = Math.max(...candles);
  const tallCandles = candles.filter((a) => a === maxNum);
  return tallCandles.length;
}

function main(candles, n) {
  let result = birthdayCakeCandles(candles);
  if (result === n) {
    console.log("ok");
  } else if (result !== n) console.log("not ok");
}
main([4, 4, 1, 3], 2);
main([2, 2, 7, 2, 2], 1);
