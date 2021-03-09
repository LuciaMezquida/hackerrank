function processData(input) {
  let numbersToCheck = input.split("\n").slice(1).map(isPrime);

  function isPrime(input, i) {
    if (input == 1) {
      return "Not prime";
    }
    if (input == 2) {
      return "Prime";
    }
    if (input % 2 == 0) {
      return "Not prime";
    }

    for (i = 3; i <= Math.sqrt(input); i += 2) {
      if (input % i == 0) {
        return "Not prime";
      }
    }
    return "Prime";
  }

  console.log(numbersToCheck.join("\n"));
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
