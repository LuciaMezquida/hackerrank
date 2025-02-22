"use strict";

//https://www.hackerrank.com/challenges/camelcase/problem

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

// Complete the camelcase function below.
function camelcase(s) {
  const blankSpaceRegex = /\S/;
  const upperCaseRegex = /[A-Z]/;
  let count = 0;
  console.log(s.match(upperCaseRegex));
  if (blankSpaceRegex.test(s)) {
    for (let i = 0; i < s.length; i++) {
      if (upperCaseRegex.test(s[i])) {
        count++;
      }
    }
  }
  return count + 1;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = camelcase(s);

  ws.write(result + "\n");

  ws.end();
}
