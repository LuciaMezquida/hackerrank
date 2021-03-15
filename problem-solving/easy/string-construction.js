function stringConstruction(s) {
  let dollars = 0;
  let newWord = [];
  s = s.split("");
  console.log(s);
  s.forEach((item) => {
    if (!newWord.includes(item)) {
      newWord.push(item);
      dollars++;
    }
  });
  return dollars;
}

console.log(stringConstruction("abcabcd"));
