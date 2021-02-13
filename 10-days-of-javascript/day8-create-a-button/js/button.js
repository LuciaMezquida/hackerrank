const body = document.querySelector("body");
const button = document.createElement("button");
button.setAttribute("id", "btn");
button.innerHTML = 0;
body.appendChild(button);
let counter = 0;
button.addEventListener("click", () => {
  counter += 1;
  button.innerHTML = counter;
});
