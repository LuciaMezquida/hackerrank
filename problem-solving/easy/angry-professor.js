"use strict";

//https://www.hackerrank.com/challenges/angry-professor/problem

// Complete the angryProfessor function below.
function angryProfessor(studentsThreshold, arrivalTime) {
  const canceledClass = "YES";
  const notCanceledClass = "NO";

  const arrivedStudents = arrivalTime.filter((studentTime) => studentTime <= 0);
  if (arrivedStudents.length < studentsThreshold) {
    return canceledClass;
  }
  return notCanceledClass;
}

function main(studentsThreshold, arrivalTime, response) {
  let result = angryProfessor(studentsThreshold, arrivalTime);
  if (result === response) {
    console.log("ok");
  } else {
    console.log("not ok");
  }
}
main(3, [-1, -2, 1, 3, 4], "YES");
main(4, [-1, -2, 0, -3, 4], "NO");
