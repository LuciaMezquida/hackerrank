function gemstones(arr) {
  let gems = [];
  //genero un array de arrays
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("").sort();
  }
  //ordeno el array por la longitud de sus componentes
  arr.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    }
    if (a.length < b.length) {
      return -1;
    }
    return 0;
  });
  //genero el primer filtro de letras repetidas para comparar posteriormente
  gems = arr[0].filter((item) => arr[1].includes(item));
  //filtro por letras repetidas en cada array
  for (let i = 1; i < arr.length - 1; i++) {
    gems = gems.filter((item) => arr[i + 1].includes(item));
  }
  //elimino las letras que se repiten en el array filtrado
  for (let i = 0; i < gems.length - 1; i++) {
    if (gems[i] === gems[i + 1]) {
      gems.splice(i, 1);
    }
  }
  return gems;
}
console.log(gemstones(["abcdde", "baccd", "eabg"]));
console.log(gemstones(["basdfj", "asdlkjfdjsa", "bnafvfnsd", "oafhdlasd"]));
console.log(gemstones(["vtrjvgbj", "mkmjyaeav", "sibzdmsk"]));
