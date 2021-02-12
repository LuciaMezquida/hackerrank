"use strict";

//https://www.hackerrank.com/challenges/the-birthday-bar/problem

function birthday(s, d, m) {
  let portions = 0;
  for (let i = 0; i < s.length && i + m <= s.length; i++) {
    let squares = s.slice(i, i + m);
    let sum = squares.reduce((a, b) => a + b, 0);
    if (sum === d) {
      portions++;
    }
  }
  return portions;
}

function main(s, d, m, res) {
  let result = birthday(s, d, m);
  if (result === res) {
    console.log("ok");
  } else if (result !== res) console.log("not ok");
}
main([1, 1, 1, 1, 1, 1], 3, 2, 0);
main([1, 1, 1, 1, 1, 1], 3, 3, 4);
main([1, 2, 1, 3, 2], 3, 2, 2);
main([4], 4, 1, 1);
