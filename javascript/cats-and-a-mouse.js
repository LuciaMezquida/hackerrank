"use strict";

//https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

const catA = "Cat A";
const catB = "Cat B";
const mouseC = "Mouse C";

const catAndMouse = (x, y, z) => {
  const distanceCatAToMouse = Math.abs(z - x);
  const distanceCatABToMouse = Math.abs(z - y);
  if (distanceCatAToMouse < distanceCatABToMouse) {
    return catA;
  } else if (distanceCatAToMouse > distanceCatABToMouse) {
    return catB;
  }
  return mouseC;
};

//Test
const main = (x, y, z, response) => {
  let result = catAndMouse(x, y, z);
  if (result === response) {
    console.log("ok");
  } else if (result !== response) console.log("not ok");
};
main(2, 5, 4, catB);
main(4, 1, 5, catA);
main(1, 3, 2, mouseC);
