process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function (data) {
  input_stdin += data;
});

process.stdin.on("end", function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function main() {
  var n = parseInt(readLine());
  a = readLine().split(" ");
  a = a.map(Number);
  let numberOfSwaps = 0;

  for (let i = 0; i < a.length; i++) {
    // loop through the array, moving forwards:
    // note in loop below we set `j = i` so we move on after finding greatest value:
    for (let j = i; j < a.length; j++) {
      if (a[i] > a[j]) {
        let temp = a[i]; // store original value for swapping
        a[i] = a[j]; // set original value position to greater value
        a[j] = temp; // set greater value position to original value
        numberOfSwaps++;
      }
    }
    if (numberOfSwaps == 0) {
      break;
    }
  }
  console.log("Array is sorted in " + numberOfSwaps + " swaps.");
  console.log("First Element: " + a[0]);
  console.log("Last Element: " + a[a.length - 1]);
}
