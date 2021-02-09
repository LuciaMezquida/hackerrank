"use strict";

//https://www.hackerrank.com/challenges/counting-valleys/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

function pageCount(numberOfPages, page) {
  let book = [];
  for (let i = 0; i <= numberOfPages; i += 2) {
    book.push([i, i + 1]);
  }
  for (let i = 0; i < book.length; i++) {
    if (book[i].includes(page)) {
      let min = i;
      let max = book.length - 1 - i;
      return Math.min(min, max);
    }
  }
}

//Test
function main(numberOfPages, page, res) {
  let result = pageCount(numberOfPages, page);
  if (result === res) {
    console.log("ok");
  } else if (result !== res) console.log("not ok");
}
main(6, 2, 1);
main(5, 4, 0);
