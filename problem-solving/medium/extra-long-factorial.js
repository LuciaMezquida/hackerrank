"use strict";

//https://www.hackerrank.com/challenges/extra-long-factorials/problem

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

// Complete the extraLongFactorials function below.
function extraLongFactorials(n) {
  let factorial = BigInt(1);
  while (BigInt(n) > 1) {
    factorial *= BigInt(n);
    n--;
  }
  console.log(String(BigInt(factorial)));
}

function main() {
  const n = parseInt(readLine(), 10);

  extraLongFactorials(n);
}
