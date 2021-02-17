// function rot13(s, k) {
//   let arr = s.split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (/[a-zA-Z]/g.test(arr[i])) {
//       if (arr[i].charCodeAt() >= 65 && arr[i].charCodeAt() <= 122 - k) {
//         let newCharPosition1 = arr[i].charCodeAt() + k;
//         let decodedLetter1 = String.fromCharCode(newCharPosition1);
//         arr.splice(i, 1, decodedLetter1);
//       } else if (arr[i].charCodeAt() > 122 - k && arr[i].charCodeAt() <= 122) {
//         while (k > 25) {
//           k = k - 26;
//         }

//         let newCharPosition2 = 97 + k - (123 - arr[i].charCodeAt());
//         let decodedLetter2 = String.fromCharCode(newCharPosition2);
//         arr.splice(i, 1, decodedLetter2);
//       }
//     }
//   }
//   console.log(arr.join(""));
//   return arr.join("");
// }

// rot13("There's-a-starman-waiting-in-the-sky", 3);
// rot13("www.abc.xy", 87);
// rot13(
//   "!m-rB`-oN!.W`cLAcVbN/CqSoolII!SImji.!w/`Xu`uZa1TWPRq`uRBtok`xPT`lL-zPTc.BSRIhu..-!.!tcl!-U",
//   62
// );
// rot13("w", 87);
// console.log("w".charCodeAt());
