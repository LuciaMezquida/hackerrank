"use strict";

// Complete the angryProfessor function below.
function angryProfessor(k, a) {
  const arrivedStudents = a.filter((student) => student <= 0);
  if (arrivedStudents.length < k) {
    return "YES";
  }
  return "NO";
}

function main() {
  const k = 3;

  const a = [-1, -2, 1, 3, 4];

  let result = angryProfessor(k, a);
  if (result === "NO") {
    console.log("ok");
  } else if (result === "YES") console.log("not ok");
}
main();
