"use strict";

//https://www.hackerrank.com/challenges/find-the-median/problem?h_r=next-challenge&h_v=zen

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

// Complete the findMedian function below.
function findMedian(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  const medianIndex = (sortedArray.length - 1) / 2;
  return sortedArray[medianIndex];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  let result = findMedian(arr);

  ws.write(result + "\n");

  ws.end();
}
