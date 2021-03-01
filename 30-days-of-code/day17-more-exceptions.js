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

//Write your code here
class Calculator {
  power(number, pow) {
    try {
      if (number >= 0 && pow >= 0) {
        return Math.pow(Number(number), Number(pow));
      } else {
        throw "n and p should be non-negative";
      }
    } catch (error) {
      return error;
    }
  }
}
function main() {
  var myCalculator = new Calculator();
  var T = parseInt(readLine());
  while (T-- > 0) {
    var num = readLine().split(" ");
    try {
      var n = parseInt(num[0]);
      var p = parseInt(num[1]);
      var ans = myCalculator.power(n, p);
      console.log(ans);
    } catch (e) {
      console.log(e);
    }
  }
}
