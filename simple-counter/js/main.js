import * as el from "./elements.js";
import * as action from "./actions.js";

el.btnDecrease.addEventListener("click", action.decrease);
el.btnIncrease.addEventListener("click", action.increase);
el.btnReset.addEventListener("click", action.reset);
