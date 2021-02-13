"use strict";

//https://www.hackerrank.com/challenges/js10-arrays/problem

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  const firstMax = Math.max(...nums);
  const filteredNums = nums.filter((item) => item !== firstMax);
  const secondMax = Math.max(...filteredNums);
  return secondMax;
}

function main() {
  const n = +readLine();
  const nums = readLine().split(" ").map(Number);

  console.log(getSecondLargest(nums));
}
