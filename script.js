"use strict";

const numberButtons = document.querySelectorAll(`.numbers-btn`);
console.log(numberButtons);

// Add event listener to each number button
numberButtons.forEach((n, i) => {
  n.addEventListener(`click`, function (e) {
    e.preventDefault;
    console.log(n, i);
    console.log(n.classList);

    if (n.classList.contains(`unclicked`)) {
      n.classList.remove(`unclicked`);
      n.classList.add(`clicked`);
    } else {
      n.classList.remove(`clicked`);
      n.classList.add(`unclicked`);
    }
  });
});
