"use strict";

function migratoryBirds(arr) {
  arr = arr.sort();
  const one = arr.filter((item) => item === 1);
  const two = arr.filter((item) => item === 2);
  const three = arr.filter((item) => item === 3);
  const four = arr.filter((item) => item === 4);
  const five = arr.filter((item) => item === 5);

  const arrays = [one, two, three, four, five];

  const longestArray = arrays.filter((a, b) => a.length > 1);
  if (longestArray.length === 0) {
    return arr[0];
  }
  const sortedLongestArray = longestArray.sort((a, b) => b.length - a.length);
  return sortedLongestArray[0][0];
}

//test
function main(arr, r) {
  let result = migratoryBirds(arr);
  if (result === r) {
    console.log("ok");
  } else if (result !== r) console.log("not ok");
}
main([1, 3, 2, 4, 1, 2], 1);
main([1, 2, 3, 4, 5, 3], 3);
main([1, 1, 1, 4, 5, 1], 1);
main([5, 4, 3, 2, 1], 1);
