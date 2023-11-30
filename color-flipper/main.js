const colors = ["red", "green", "blue", "yellow", "pink"];

const btn = document.getElementById("btn");
const span = document.querySelector(".color");

btn.addEventListener("click", () => {
  let randomNumber = getRandomNumber();
  document.body.style.background = colors[randomNumber];
  span.textContent = colors[randomNumber];
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
