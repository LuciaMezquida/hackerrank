"use strict";

//https://www.hackerrank.com/challenges/equality-in-a-array/problem

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

// Complete the equalizeArray function below.
function equalizeArray(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  let equals = 0;
  let maxEquals = 0;
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] == sortedArray[i + 1]) {
      equals++;
      if (equals > maxEquals) {
        maxEquals = equals;
      }
    } else {
      equals = 0;
    }
  }
  return sortedArray.length - (maxEquals + 1);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  let result = equalizeArray(arr);

  ws.write(result + "\n");

  ws.end();
}
