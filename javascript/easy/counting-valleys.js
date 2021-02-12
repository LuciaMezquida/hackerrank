"use strict";

//https://www.hackerrank.com/challenges/counting-valleys/forum

function countingValleys(steps, path) {
  let seaLevel = 0;
  let valleys = 0;
  for (let i = 0; i < path.length; i++) {
    if (path[i] === "U") {
      seaLevel += 1;
    } else {
      seaLevel -= 1;
    }
    if (path[i] === "U" && seaLevel === 0) {
      valleys += 1;
    }
  }
  return valleys;
}

//Test
function main(steps, path, response) {
  let result = countingValleys(steps, path, response);
  if (result === response) {
    console.log("ok");
  } else {
    console.log("not ok");
  }
}
main(8, ["D", "D", "U", "U", "U", "U", "D", "D"], 1);
main(8, ["U", "D", "D", "D", "U", "D", "U", "U"], 1);
