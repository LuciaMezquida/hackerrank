function funnyString(s) {
  const stringToArray = s.split("");
  const reverseToArray = s.split("").reverse();
  const stringToAscii = getAsciiValues(stringToArray);
  const reverseToAscii = getAsciiValues(reverseToArray);
  let areEquals = true;
  for (let i = 0; i < stringToAscii.length; i++) {
    if (stringToAscii[i] !== reverseToAscii[i]) {
      areEquals = false;
      break;
    }
  }
  return areEquals ? "Funny" : "Not Funny";
}
const getAsciiValues = (array) => {
  let differences = [];
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].charCodeAt();
  }
  for (let i = 0; i < array.length - 1; i++) {
    const absDifference = Math.abs(array[i] - array[i + 1]);
    differences.push(absDifference);
  }
  return differences;
};
console.log(funnyString("acxz"));
console.log(funnyString("bcxz"));
