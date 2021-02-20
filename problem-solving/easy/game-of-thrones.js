"use strict";

//https://www.hackerrank.com/challenges/game-of-thrones/problem

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

// Complete the gameOfThrones function below.
function gameOfThrones(s) {
  let even = 0;
  let odd = 0;
  const sortedString = s.toLowerCase().split("").sort();
  while (sortedString.length > 0) {
    const filteredString = sortedString.filter(
      (item) => item === sortedString[0]
    );
    if (filteredString.length % 2 === 0) {
      even++;
    } else {
      odd++;
    }
    sortedString.splice(0, filteredString.length);
  }
  if (odd > 1) {
    return "NO";
  } else {
    return "YES";
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = gameOfThrones(s);

  ws.write(result + "\n");

  ws.end();
}
