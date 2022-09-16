"use strict";

const numberButtons = document.querySelectorAll(`.numbers-btn`);
const body = document.querySelector(`body`);
const card1 = document.querySelector(`.card1`);
const card2 = document.querySelector(`.card2`);
const submit = document.querySelector(`.submit`);
const selected = document.querySelector(`.selected`);

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

// Event Listeners

// Add event listener to each number button
numberButtons.forEach((btn) => {
  btn.addEventListener(`click`, function (e) {
    e.preventDefault();
    for (const n of numberButtons) {
      if (n !== e.target) {
        n.classList.remove(`clicked`);
        n.classList.add(`unclicked`);
      }
    }
    classSwitcher(e.target.classList);
  });
});

// Remove selection if escape is pressed
document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape`)
    for (const n of numberButtons) {
      n.classList.remove(`clicked`);
      n.classList.add(`unclicked`);
    }
});

// Remove selection if card is clicked off of
body.addEventListener(`click`, function (e) {
  for (const n of numberButtons) {
    if (
      n.classList.contains(`clicked`) &&
      n !== e.target &&
      e.target !== submit
    ) {
      n.classList.remove(`clicked`);
      n.classList.add(`unclicked`);
    }
  }
});

// Change to thank you card when submit is clicked
submit.addEventListener(`click`, function (e) {
  e.preventDefault();

  numberButtons.forEach((btn) => {
    // Prevent empty submissions
    if (!btn.classList.contains(`clicked`)) {
      return;
    } else {
      // Switch to thank you card
      card1.classList.add(`hidden`);
      card2.classList.remove(`hidden`);
      //  Set text content to selected rating
      for (const n of numberButtons) {
        if (n.classList.contains(`clicked`)) {
          selected.textContent = `You selected ${n.textContent} out of 5`;
        }
      }
    }
  });
});
