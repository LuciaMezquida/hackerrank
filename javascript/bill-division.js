"use strict";

function bonAppetit(bill, k, b) {
  const sumBill = bill.reduce((a, b) => a + b, 0);
  const annaMustPay = (sumBill - bill[k]) / 2;
  if (annaMustPay !== b) {
    return b - annaMustPay;
  }
  return "Bon Appetit";
}
//test
function main(bill, k, b, output) {
  let result = bonAppetit(bill, k, b);
  if (result === output) {
    console.log("ok");
  } else if (result !== output) console.log("not ok");
}
main([3, 10, 2, 9], 1, 12, 5);
main([3, 10, 2, 9], 1, 7, "Bon Appetit");
