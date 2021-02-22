"use strict";

//https://www.hackerrank.com/challenges/the-time-in-words/problem

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

// Complete the timeInWords function below.
function timeInWords(h, m) {
  const minutesAndHours = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine",
  ];
  let time = "";
  if (m <= 30) {
    if (m == 0) time = minutesAndHours[h] + " o' clock";
    else if (m == 15) time = "quarter past " + minutesAndHours[h];
    else if (m == 30) time = "half past " + minutesAndHours[h];
    else if (m == 1)
      time = minutesAndHours[m] + " minute past " + minutesAndHours[h];
    else time = minutesAndHours[m] + " minutes past " + minutesAndHours[h];
  } else {
    if (m == 45) time = "quarter to " + minutesAndHours[h + 1];
    else if (m == 59)
      time = minutesAndHours[60 - m] + " minute to " + minutesAndHours[h + 1];
    else
      time = minutesAndHours[60 - m] + " minutes to " + minutesAndHours[h + 1];
  }
  return time;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const h = parseInt(readLine(), 10);

  const m = parseInt(readLine(), 10);

  let result = timeInWords(h, m);

  ws.write(result + "\n");

  ws.end();
}
