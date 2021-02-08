"use strict";

//https://www.hackerrank.com/challenges/day-of-the-programmer/problem

function dayOfTheProgrammer(year) {
  let isLeapYear;
  if (year === 1918) {
    return "26.09.1918";
  }
  if (year <= 1917) isLeapYear = year % 4 == 0;
  if (year > 1918)
    isLeapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  if (isLeapYear) {
    return "12.09." + year;
  }
  return "13.09." + year;
}
//test
function main(year, output) {
  let result = dayOfTheProgrammer(year);
  if (result === output) {
    console.log("ok");
  } else if (result !== output) console.log("not ok");
}
main(2017, "13.09.2017");
main(2016, "12.09.2016");
main(1800, "12.09.1800");
main(1700, "12.09.1700");
main(1918, "26.09.1918");
