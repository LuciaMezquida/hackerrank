"use strict";

//https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem?h_r=email&unlock_token=8b28417ef9746016a63ed17f0bb3bd917960ac22&utm_campaign=30_days_of_code_continuous&utm_medium=email&utm_source=daily_reminder

function processData(input) {
  const inputArray = input.split("\n");
  const phoneBookSize = +inputArray[0];
  const inputGuide = inputArray.slice(phoneBookSize + 1);
  const telephoneList = inputArray.slice(1, phoneBookSize + 1).map((list) => {
    let result = {
      name: list.split(" ")[0],
      phoneNumber: list.split(" ")[1],
    };
    return result;
  });

  let phoneBook = [];
  for (let item of telephoneList) {
    phoneBook[item.name] = item.phoneNumber;
  }

  for (let name of inputGuide) {
    if (phoneBook[name]) {
      console.log(`${name}=${phoneBook[name]}`);
    } else {
      console.log("Not found");
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
