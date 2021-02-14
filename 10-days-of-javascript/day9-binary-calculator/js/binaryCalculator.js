"use strict";

const body = document.querySelector("body");
const result = document.createElement("div");
result.setAttribute("id", "res");
const buttonContainer = document.createElement("div");
buttonContainer.setAttribute("id", "btns");
body.appendChild(result);
body.appendChild(buttonContainer);

const createButtons = () => {
  const buttonsValue = ["0", "1", "C", "=", "+", "-", "*", "/"];
  const buttonsId = ["0", "1", "Clr", "Eql", "Sum", "Sub", "Mul", "Div"];
  for (let i = 0; i < buttonsValue.length; i++) {
    const button = document.createElement("button");
    button.setAttribute("id", `btn${buttonsId[i]}`);
    button.classList.add("btn");
    button.innerHTML = buttonsValue[i];
    buttonContainer.appendChild(button);
  }
};
createButtons();

const allButtons = document.querySelectorAll(".btn");
let responseValue = "";
for (let btn of allButtons) {
  btn.addEventListener("click", (ev) => {
    const btnValue = ev.currentTarget.innerHTML;
    if (btnValue !== "=") {
      responseValue += btnValue;
      result.innerHTML = responseValue;
    }
    if (btnValue === "C") {
      result.innerHTML = "";
      responseValue = "";
    }
    if (btnValue === "=") {
      let operator = [];
      let total = 0;
      const regex = /^[0-9]$/;
      operator = responseValue
        .split("")
        .filter((item) => regex.test(item) === false);
      const indexOperator = responseValue.indexOf(operator);
      const operand1 = parseInt(responseValue.slice(0, indexOperator), 2);
      const operand2 = parseInt(
        responseValue.slice(indexOperator + 1, responseValue.length),
        2
      );
      switch (operator[0]) {
        case "+":
          total = (operand1 + operand2).toString(2);
          break;
        case "-":
          total = (operand1 - operand2).toString(2);
          break;
        case "*":
          total = (operand1 * operand2).toString(2);
          break;
        case "/":
          total = parseInt(operand1 / operand2);
          break;
      }
      responseValue = parseInt(total);
      result.innerHTML = responseValue;
    }
  });
}
