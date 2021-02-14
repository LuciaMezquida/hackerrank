const body = document.querySelector("body");
const buttonsContainer = document.createElement("div");
buttonsContainer.setAttribute("id", "btns");
body.appendChild(buttonsContainer);

for (let i = 1; i <= 9; i++) {
  const button = document.createElement("button");
  button.setAttribute("id", `btn${i}`);
  button.innerHTML = i;
  buttonsContainer.appendChild(button);
}

const button5 = document.querySelector("#btn5");
button5.addEventListener("click", () => {
  for (let i = 1; i <= 9; i++) {
    const button = document.querySelector(`#btn${i}`);
    const value = button.innerHTML;
    switch (value) {
      case "1":
        button.innerHTML = 4;
        break;
      case "2":
        button.innerHTML = 1;
        break;
      case "3":
        button.innerHTML = 2;
        break;
      case "4":
        button.innerHTML = 7;
        break;
      case "6":
        button.innerHTML = 3;
        break;
      case "7":
        button.innerHTML = 8;
        break;
      case "8":
        button.innerHTML = 9;
        break;
      case "9":
        button.innerHTML = 6;
        break;
    }
  }
});
