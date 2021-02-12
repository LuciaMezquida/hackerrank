"use strict";

//https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
  let highestScore = scores[0];
  let lowestScore = scores[0];
  let highestScoreCounter = 0;
  let lowestScoreCounter = 0;
  scores.forEach((score) => {
    if (score < lowestScore) {
      lowestScore = score;
      lowestScoreCounter++;
    } else if (score > highestScore) {
      highestScore = score;
      highestScoreCounter++;
    }
  });
  return highestScoreCounter, lowestScoreCounter;
}

function main(scores, res) {
  let result = breakingRecords(scores);
  if (result === res) {
    console.log("ok");
  } else if (result !== res) console.log("not ok");
}
main([10, 5, 20, 20, 4, 5, 2, 25, 1], (2, 4));
main([3, 4, 21, 36, 10, 28, 35, 5, 24, 42], (4, 0));
