"use strict";

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
/*
 * Create the function factorial here
 */
const factorial = (n) => {
  let accumulator = 1;
  for (let i = n; i > 0; i--) {
    accumulator *= i;
  }
  return accumulator;
};

function main() {
  const n = +readLine();

  console.log(factorial(n));
}
