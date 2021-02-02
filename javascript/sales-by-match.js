function salesByMatch(n, ar) {
  ar = ar.sort();
  let pairs = 0;
  for (let i = 0; i < n; i++) {
    if (ar[i] === ar[i + 1]) {
      i++;
      pairs++;
    }
  }

  return pairs;
}

//test
function main(n, ar, r) {
  let result = salesByMatch(n, ar);
  if (result === r) {
    console.log("ok");
  } else if (result !== r) console.log("not ok");
}
main(7, [1, 2, 1, 2, 1, 3, 2], 2);
main(9, [10, 20, 20, 10, 10, 30, 50, 10, 20], 3);
main(6, [1, 1, 1, 4, 5, 1], 2);
