import * as el from "./elements.js";

let reviewsId = 0;

export const changeReviewsToRight = () => {
  if (reviewsId >= 3) {
    reviewsId = 0;
  } else {
    reviewsId++;
  }

  showPerson(reviewsId);
};

export const changeReviewsToLeft = () => {
  if (reviewsId <= 0) {
    reviewsId = 3;
  } else {
    reviewsId--;
  }

  showPerson(reviewsId);
};

export const changeReviewsRandom = () => {
  let randomReview = Math.floor(Math.random() * el.reviews.length);
  reviewsId = randomReview;

  showPerson(reviewsId);
};

const showPerson = (person) => {
  const showReview = el.reviews[person];
  el.img.setAttribute("src", el.reviews[reviewsId].img);
  el.img.setAttribute("alt", el.reviews[reviewsId].alt);
  el.name.textContent = el.reviews[reviewsId].name;
  el.skill.textContent = el.reviews[reviewsId].skill;
  el.about.textContent = el.reviews[reviewsId].about;
};
