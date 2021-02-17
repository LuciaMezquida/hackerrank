"use strict";

//https://www.hackerrank.com/challenges/strange-advertising/problem

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

// Complete the viralAdvertising function below.
function viralAdvertising(n) {
  let accum = 0,
    liked,
    shared = 5;
  for (let i = 0; i < n; i++) {
    liked = Math.floor(shared / 2);
    accum += liked;
    shared = liked * 3;
  }
  return accum;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  let result = viralAdvertising(n);

  ws.write(result + "\n");

  ws.end();
}
