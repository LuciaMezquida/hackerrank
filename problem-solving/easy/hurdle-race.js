"use strict";

//https://www.hackerrank.com/challenges/the-hurdle-race/problem

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

// Complete the hurdleRace function below.
function hurdleRace(k, height) {
  let numberOfPotions = 0;
  const higherHurdle = Math.max(...height);
  if (higherHurdle <= k) {
    return 0;
  } else {
    return higherHurdle - k;
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nk = readLine().split(" ");

  const n = parseInt(nk[0], 10);

  const k = parseInt(nk[1], 10);

  const height = readLine()
    .split(" ")
    .map((heightTemp) => parseInt(heightTemp, 10));

  let result = hurdleRace(k, height);

  ws.write(result + "\n");

  ws.end();
}
