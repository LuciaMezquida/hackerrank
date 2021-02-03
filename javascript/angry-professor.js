"use strict";

// Complete the angryProfessor function below.
function angryProfessor(k, a) {
  const arrivedStudents = a.filter((student) => student <= 0);
  if (arrivedStudents.length < k) {
    return "YES";
  }
  return "NO";
}

function main(k, a, res) {

  let result = angryProfessor(k, a);
  if (result === res) {
    console.log("ok");
  } else if (result !== res) console.log("not ok");
}
main(3, [-1, -2, 1, 3, 4], 'YES');
