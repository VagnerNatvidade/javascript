import * as el from "./elements.js";

let counter = 0;

export const decrease = () => {
  counter--;
  el.span.textContent = counter;
  moreOrLessThanZero();
};

export const increase = () => {
  counter++;
  el.span.textContent = counter;
  moreOrLessThanZero();
};

export const reset = () => {
  counter = 0;
  el.span.textContent = counter;
  moreOrLessThanZero();
};

const moreOrLessThanZero = () => {
  if (counter < 0) {
    el.span.style.color = "red";
  } else if (counter == 0) {
    el.span.style.color = "black";
  } else {
    el.span.style.color = "green";
  }
};
