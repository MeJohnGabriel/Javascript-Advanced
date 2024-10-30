'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 14;

console.log((document.querySelector('.guess').value = 14));
document.querySelector('.guess').value = 12;
*/

/////generating the secret number:
const displayMsg = function (message) {
  document.querySelector('.message').textContent = message;
};
const styleNumber = function (number) {
  document.querySelector('.number').style.width = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//(CHEATING CODE)console.log(secretNumber);
let score = 20;
let highscore = 0;
////working on the input:
///THIS IS THE EVENT AND FUNCTION OF THE BUTTON `CHECK`
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //this first if says "everything different than a true value will show this message"

  if (!guess) {
    noNumber(`[ERROR]No number detected`);
    ///When the player wins the correct number.
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMsg(`Correct Number🎉`);
    document.querySelector('body').style.backgroundColor = '#60b347';
    styleNumber(style.width = `25rem`);
    styleNumber(style.fontsize = `7rem`);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    ///When guess is too high or too low
  } else if (guess !== secretNumber) {
    ///This is for the score counter hits zero(and not keep adding negative numbers)
    if (score > 1) {
      displayMsg(guess > secretNumber ? `Too high!⬆️` : `Too low!⬇️`)
      score--;
      displayScore(score);
    } else {
      displayMsg(`You lost!`);
     displayScore(score) = 0;
    }
  }
});
///// old version to check if the number is too low
/*else if (guess < secretNumber)
    if (score > 1) {
      document.querySelector('.message').textContent = ;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `You lost!❌`;
      document.querySelector('.score').textContent = 0;
    }*/

///Reseting everything using "location.reload"
document.querySelector('.again').addEventListener('click', function () {
  //you could simply reload the page(BUT if you do that the highscore will be reseted)
  //location.reload();

  //course method
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = `Start Guessing...`;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
