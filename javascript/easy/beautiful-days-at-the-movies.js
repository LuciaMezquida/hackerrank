"use strict";

// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

const beautifulDays = (i, j, k) => {
  let rangeOfDays = [];
  let counter = 0;
  for (let l = i; l <= j; l++) {
    rangeOfDays.push(l);
  }
  for (let l = 0; l < rangeOfDays.length; l++) {
    const reverseNumber = rangeOfDays[l]
      .toString()
      .split("")
      .reverse()
      .join("");
    if (Number.isInteger((rangeOfDays[l] - reverseNumber) / k)) {
      counter++;
    }
  }
  return counter;
};

//Test
const main = (i, j, k, response) => {
  let result = beautifulDays(i, j, k);
  if (result === response) {
    console.log("ok");
  } else {
    console.log("not ok");
  }
};
main(20, 23, 6, 2);
