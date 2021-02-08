"use strict";
//https://www.hackerrank.com/challenges/kangaroo/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
const samePossition = "YES";
const wrongPossition = "NO";

function kangaroo(kangaroo1, velocity1, kangaroo2, velocity2) {
  if (
    (kangaroo2 - kangaroo1) * (velocity2 - velocity1) < 0 &&
    (kangaroo2 - kangaroo1) % (velocity2 - velocity1) == 0
  ) {
    return samePossition;
  } else {
    return wrongPossition;
  }
}

function main(kangaroo1, velocity1, kangaroo2, velocity2, res) {
  let result = kangaroo(kangaroo1, velocity1, kangaroo2, velocity2);
  if (result === res) {
    console.log("ok");
  } else if (result !== res) console.log("not ok");
}
main(0, 2, 5, 3, wrongPossition);
main(0, 3, 4, 2, samePossition);
