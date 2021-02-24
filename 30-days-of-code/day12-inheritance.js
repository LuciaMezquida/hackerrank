"use strict";

//https://www.hackerrank.com/challenges/30-inheritance/problem?h_r=email&unlock_token=465446275d1dea4eedc668ca30da1b0e592f10b6&utm_campaign=30_days_of_code_continuous&utm_medium=email&utm_source=daily_reminder

var _input = "";
var _index = 0;
process.stdin.on("data", (data) => {
  _input += data;
});
process.stdin.on("end", () => {
  _input = _input.split(new RegExp("[ \n]+"));
  main();
});
function read() {
  return _input[_index++];
}

/**** Ignore above this line. ****/

class Person {
  constructor(firstName, lastName, identification) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = identification;
  }

  printPerson() {
    console.log(
      "Name: " +
        this.lastName +
        ", " +
        this.firstName +
        "\nID: " +
        this.idNumber
    );
  }
}

class Student extends Person {
  constructor(firstName, lastName, idNumber, scores) {
    super(firstName, lastName, idNumber);
    this.scores = scores;
  }

  calculate() {
    let sum = 0;
    let average = 0;
    let letter = " ";
    for (let i = 0; i < this.scores.length; i++) {
      sum += parseInt(this.scores[i]);
    }

    if (this.scores.length != 0) average = sum / this.scores.length;

    if (average >= 90 && average <= 100) letter = "O";
    else if (average >= 80 && average < 90) letter = "E";
    else if (average >= 70 && average < 80) letter = "A";
    else if (average >= 55 && average < 70) letter = "P";
    else if (average >= 40 && average < 55) letter = "D";
    else if (average < 40) letter = "T";

    return letter;
  }
}

function main() {
  let firstName = read();
  let lastName = read();
  let id = +read();
  let numScores = +read();
  let testScores = new Array(numScores);

  for (var i = 0; i < numScores; i++) {
    testScores[i] = +read();
  }

  let s = new Student(firstName, lastName, id, testScores);
  s.printPerson();
  s.calculate();
  console.log("Grade: " + s.calculate());
}
