"use strict";

//https://www.hackerrank.com/challenges/mars-exploration/problem

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

// Complete the marsExploration function below.
function marsExploration(s) {
  const stringToArray = s.split("");
  let triArray = [];
  let lettersChanged = 0;
  for (let i = 0; i < stringToArray.length; i++) {
    if (i === 0 || i % 3 === 0) {
      triArray.push(
        stringToArray[i] + stringToArray[i + 1] + stringToArray[i + 2]
      );
    }
  }

  for (let i = 0; i < triArray.length; i++) {
    if (triArray[i][0] != "S") lettersChanged++;
    if (triArray[i][1] != "O") lettersChanged++;
    if (triArray[i][2] != "S") lettersChanged++;
  }
  return lettersChanged !== 0 ? lettersChanged : 0;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = marsExploration(s);

  ws.write(result + "\n");

  ws.end();
}
