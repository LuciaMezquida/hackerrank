"use strict";

//https://www.hackerrank.com/challenges/30-binary-numbers/problem?h_r=email&unlock_token=3fe4435185adf9f1727d68befd450680dcfb5fc7&utm_campaign=30_days_of_code_continuous&utm_medium=email&utm_source=daily_reminder

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

function binaryNumbers(num) {
  const binaryNum = num.toString(2);
  const binaryNumToArray = binaryNum.toString().split("");
  console.log(binaryNum);
  let numOfOnes = 0;
  let maxNumOfOnes = 0;
  for (let i = 0; i < binaryNumToArray.length; i++) {
    if (binaryNumToArray[i] == 1) {
      numOfOnes++;
    } else if (binaryNumToArray[i] == 0) {
      if (maxNumOfOnes < numOfOnes) {
        maxNumOfOnes = numOfOnes;
        numOfOnes = 0;
        console.log(i, maxNumOfOnes);
      } else {
        numOfOnes = 0;
      }
    }
  }
  return Math.max(numOfOnes, maxNumOfOnes);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  let result = binaryNumbers(n);

  ws.write(result + "\n");

  ws.end();
}
