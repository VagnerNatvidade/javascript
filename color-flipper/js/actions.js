import * as el from "./elements.js";
import state from "./state.js";

el.btnHex.addEventListener("click", () => {
  state.simple = false;
});

el.btnSimple.addEventListener("click", () => {
  state.simple = true;
});

export const setColor = () => {
  if (state.simple === true) {
    setSimpleColor();
  } else {
    setHexColor();
  }
};

const setSimpleColor = () => {
  let randomNumber = getRandomSimpleNumber();
  el.body.style.background = el.colors[randomNumber];
  el.span.textContent = el.colors[randomNumber];
};

const setHexColor = () => {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += el.hex[getRandomHexNumber()];
  }

  el.body.style.background = hexColor;
  el.span.textContent = hexColor;
};

const getRandomSimpleNumber = () => {
  return Math.floor(Math.random() * el.colors.length);
};

const getRandomHexNumber = () => {
  return Math.floor(Math.random() * el.hex.length);
};
