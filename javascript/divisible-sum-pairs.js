"use strict";

function divisibleSumPairs(n, k, ar) {
  let counter = 0;
  for (let i = 0; i < ar.length; i++) {
    for (let j = 1; j < ar.length; j++) {
      if (i < j && (ar[i] + ar[j]) % k === 0) {
        counter++;
      }
    }
  }
  return counter;
}

//test
function main(n, k, ar, r) {
  let result = divisibleSumPairs(n, k, ar);
  if (result === r) {
    console.log("ok");
  } else if (result !== r) console.log("not ok");
}
main(6, 3, [1, 3, 2, 6, 1, 2], 5);
main(6, 5, [1, 2, 3, 4, 5, 6], 3);
