'use strict';

//Selecting elements #score--0 and #score--1
let score0Element = document.querySelector('#score--0');
let score1Element = document.querySelector('#score--1');
const diceElement = document.querySelector('.dice');
let currentNumber0 = document.querySelector('#current--0');
const newGameButtonElement = document.querySelector('.bnt--new');
const rollDiceButtonElement = document.querySelector('.btn--roll');
const holdButtonElement = document.querySelector('.btn--hold');

//Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

//Rolling the dice functionality
rollDiceButtonElement.addEventListener('click', function () {
  // 1. Generates a random dice roll
  score0Element.textContent = Math.trunc(Math.random() * 6) + 1;
  console.log(`Dice rolled at number: ${score0Element.textContent}`);
  // 2. Display this random dice
  // 3. Check if the number of the dice is 1, if it is, switch to the player.
});

holdButtonElement.addEventListener('click', function () {
  //1.1 issue: for each click on the holdButtonEl. add up the random number
  //to the current score
  for (let i = 0; i < score0Element.length; i++) {
    currentNumber0.textContent = score0Element[i].textContent;
  }
});
