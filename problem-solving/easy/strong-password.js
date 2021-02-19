"use strict";

//https://www.hackerrank.com/challenges/strong-password/problem

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

// Complete the minimumNumber function below.
function minimumNumber(n, password) {
  let counter = 0;
  password = password.split("");
  const numberRegex = /[0-9]/;
  const upperCaseRegex = /[A-Z]/;
  const lowerCaseRegex = /[a-z]/;
  const special_characters = /[@#$%^&*()-+]/;
  const number = password.find((item) => item.match(numberRegex));
  if (number === undefined) {
    counter += 1;
  }
  const upperCase = password.find((item) => item.match(upperCaseRegex));
  if (upperCase === undefined) {
    counter += 1;
  }
  const lowerCase = password.find((item) => item.match(lowerCaseRegex));
  if (lowerCase === undefined) {
    counter += 1;
  }
  const special = password.find(
    (item) => item.match(special_characters) || item === "-" || item === "!"
  );
  if (special === undefined) {
    counter += 1;
  }

  return Math.max(counter, 6 - n);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const password = readLine();

  let answer = minimumNumber(n, password);

  ws.write(answer + "\n");

  ws.end();
}
