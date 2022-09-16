"use strict";

const numberButtons = document.querySelectorAll(`.numbers-btn`);

// Functions
const classSwitcher = function (classList) {
  if (classList.contains(`unclicked`)) {
    classList.remove(`unclicked`);
    classList.add(`clicked`);
  } else {
    classList.remove(`clicked`);
    classList.add(`unclicked`);
  }
};

// Add event listener to each number button
numberButtons.forEach((btn, i) => {
  btn.addEventListener(`click`, function (e) {
    e.preventDefault;
    for (const n of numberButtons) {
      if (n !== e.target) {
        n.classList.remove(`clicked`);
        n.classList.add(`unclicked`);
      }
    }
    classSwitcher(btn.classList);
  });
});
