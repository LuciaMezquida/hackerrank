"use strict";

//https://www.hackerrank.com/challenges/30-recursion/problem?h_r=email&unlock_token=7f2d789dc17e470f30afa266932b6525af553759&utm_campaign=30_days_of_code_continuous&utm_medium=email&utm_source=daily_reminder

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

// Complete the factorial function below.
function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  let result = factorial(n);

  ws.write(result + "\n");

  ws.end();
}
