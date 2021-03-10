function processData(input) {
  const dates = input.split("\n");
  const date1 = dates[0].split(" ");
  const date2 = dates[1].split(" ");

  if (date1[2] > date2[2]) {
    console.log(10000);
  } else if (date1[2] < date2[2]) {
    console.log(0);
  } else {
    if (parseInt(date1[1]) <= parseInt(date2[1])) {
      if (date1[0] > date2[0]) {
        console.log(15 * (date1[0] - date2[0]));
      } else {
        console.log(0);
      }
    } else {
      console.log(500 * (date1[1] - date2[1]));
    }
  }
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
