"use strict";

//https://www.hackerrank.com/challenges/cut-the-sticks/problem?h_r=profile

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

// Complete the cutTheSticks function below.
function cutTheSticks(arr) {
  let result = [];
  result.push(arr.length);
  while (arr.length > 0) {
    let minNum = Math.min(...arr);
    arr = arr.map((num) => num - minNum);
    arr = arr.filter((num) => num > 0);
    if (arr.length > 0) {
      result.push(arr.length);
    }
  }
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  let result = cutTheSticks(arr);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
