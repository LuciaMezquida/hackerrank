"use strict";

//https://www.hackerrank.com/challenges/30-review-loop/problem

function processData(input) {
  let array = input.split("\n");
  let inputToArray = input.split("\n");
  for (let i = 1; i < inputToArray.length; i++) {
    let evenOdd1 = "";
    let evenOdd2 = "";
    for (let j = 0; j < inputToArray[i].length; j++) {
      if (j % 2 === 0) {
        evenOdd1 += inputToArray[i][j];
      } else {
        evenOdd2 += inputToArray[i][j];
      }
    }
    console.log(evenOdd1, evenOdd2);
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
