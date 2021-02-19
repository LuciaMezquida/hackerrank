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
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
  const containPM = s.includes("PM");
  let oldTime = s.slice(0, 2);
  let newTime = parseInt(oldTime);
  console.log(newTime);
  if (containPM) {
    newTime += 12;
    newTime = newTime.toString();
    if (newTime === "24") {
      newTime = "12";
    }
    newTime = s.replace(oldTime, newTime);
    return newTime.slice(0, s.length - 2);
  } else {
    if (newTime === 12) {
      newTime = "00";
      newTime = s.replace(oldTime, newTime);
      return newTime.slice(0, s.length - 2);
    }
    return s.slice(0, s.length - 2);
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
