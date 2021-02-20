"use strict";

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

// Complete the palindromeIndex function below.
function palindromeIndex(s) {
  if (s !== s.split("").reverse().join("")) {
    for (let i = 0; i < s.length; i++) {
      const stringToArray = s.split("");
      stringToArray.splice(i, 1);
      if (stringToArray.join("") === stringToArray.reverse().join("")) {
        return i;
      }
    }
    return -1;
  }
  return -1;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine();

    let result = palindromeIndex(s);

    ws.write(result + "\n");
  }

  ws.end();
}
