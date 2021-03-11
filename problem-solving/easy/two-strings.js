function twoStrings(s1, s2) {
  const arr1 = s1.split("");

  for (let i = 0; i < arr1.length; i++) {
    if (s2.includes(arr1[i])) return "YES";
  }
  return "NO";
}

console.log(twoStrings("hello", "world"));
console.log(twoStrings("hi", "world"));
