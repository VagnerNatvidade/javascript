import * as el from "./elements.js";
import * as action from "./actions.js";

el.bntToRight.addEventListener("click", action.changeReviewsToRight);
el.btnToLeft.addEventListener("click", action.changeReviewsToLeft);
el.btnRandom.addEventListener("click", action.changeReviewsRandom);
