"use strict";

//https://www.hackerrank.com/challenges/minimum-distances/problem

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

// Complete the minimumDistances function below.
function minimumDistances(a) {
  let minDistance = a.length;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[i] === a[j] && i !== j) {
        minDistance = Math.min(minDistance, Math.abs(j - i));
      }
    }
  }
  return minDistance === a.length ? -1 : minDistance;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const a = readLine()
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  let result = minimumDistances(a);

  ws.write(result + "\n");

  ws.end();
}
