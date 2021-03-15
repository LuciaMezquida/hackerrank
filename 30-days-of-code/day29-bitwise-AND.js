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
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function getMax(n, k) {
  let max = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      let bitwise = i & j;
      if (k > bitwise && bitwise > max) max = bitwise;
    }
  }
  return max;
}

function main() {
  const t = parseInt(readLine(), 10);
  let arr = [];

  for (let tItr = 0; tItr < t; tItr++) {
    const nk = readLine().split(" ");

    const n = parseInt(nk[0], 10);
    const k = parseInt(nk[1], 10);
    console.log(getMax(n, k));
  }
}
