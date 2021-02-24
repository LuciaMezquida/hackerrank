function superReducedString(s) {
  let stringToArray = s.split("");
  for (let i = 0; i < stringToArray.length; i++) {
    console.log(stringToArray);
    console.log(stringToArray[i]);
    console.log(i);
    console.log(stringToArray[i + 1]);
    if (stringToArray[i] === stringToArray[i + 1]) {
      stringToArray.splice(i, 1);
      stringToArray.splice(i, 1);
      i = -1;
    }
  }
  return stringToArray.length === 0 ? "Empty String" : stringToArray.join("");
}
console.log(superReducedString("aaabccddd"));
console.log(superReducedString("baab"));
console.log(
  superReducedString(
    "zztqooauhujtmxnsbzpykwlvpfyqijvdhuhiroodmuxiobyvwwxupqwydkpeebxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh"
  )
);
