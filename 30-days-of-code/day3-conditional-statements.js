"use strict";

//https://www.hackerrank.com/challenges/30-conditional-statements/problem

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

const weirdOrNot = (n) => {
  if (n % 2 !== 0) {
    console.log("Weird");
  } else {
    if (n >= 2 && n < 6) {
      console.log("Not Weird");
    }
    if (n >= 6 && n <= 20) {
      console.log("Weird");
    }
    if (n > 20) {
      console.log("Not Weird");
    }
  }
};

function main() {
  const N = parseInt(readLine(), 10);
  weirdOrNot(N);
}
