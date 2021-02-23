"use strict";

//https://www.hackerrank.com/challenges/closest-numbers/problem

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the closestNumbers function below.
function closestNumbers(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  let difference = 0;
  let closestNum = [];
  let smallestDifference = sortedArray[sortedArray.length - 1];
  for (let i = 0; i < sortedArray.length; i++) {
    difference = sortedArray[i + 1] - sortedArray[i];
    if (difference < smallestDifference) {
      smallestDifference = difference;
      difference = 0;
    }
    difference = 0;
  }
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i + 1] - sortedArray[i] === smallestDifference) {
      closestNum.push(sortedArray[i], sortedArray[i + 1]);
    }
  }
  return closestNum;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  let result = closestNumbers(arr);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
