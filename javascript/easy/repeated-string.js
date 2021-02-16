"use strict";

//https://www.hackerrank.com/challenges/repeated-string/problem?h_r=profile

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

// Complete the repeatedString function below.
function repeatedString(s, n) {
  const filterVowelA = s.split("").filter((letter) => letter === "a").length;
  const times = parseInt(n / s.length);
  const rest = n % s.length;
  const vowelsAInRest = s
    .slice(0, rest)
    .split("")
    .filter((letter) => letter === "a").length;

  const totalVowelsA = times * filterVowelA + vowelsAInRest;
  return totalVowelsA;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const n = parseInt(readLine(), 10);

  let result = repeatedString(s, n);

  ws.write(result + "\n");

  ws.end();
}
