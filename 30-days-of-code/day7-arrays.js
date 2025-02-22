"use strict";

//https://www.hackerrank.com/challenges/30-arrays/problem

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

function reverseArray(arr) {
  return arr.reverse();
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));
  let result = reverseArray(arr);
  ws.write(result.join(" ") + "\n");
  ws.end();
}
