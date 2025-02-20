"use strict";

let strNumbers = 0;
let sum2 = 0;

const btnElement = document.getElementById("btn");
const resultDisplay = document.querySelector("#result");
const bodyElement = document.querySelector("#bodyEl");

// The eventlistener needs the variables dinamically so put the variables inside
// the function
btnElement.addEventListener("click", function () {
  const userInputField = document.getElementById("userInput").value;
  const userInputFieldNumber = parseFloat(userInputField);
  if (!userInputFieldNumber) {
    window.alert("[ERROR]Insert a valid number!");
  } else {
    for (let i = 1; i <= userInputFieldNumber; i++) {
      strNumbers += `+${i}`;
      sum2 += i;
    }
  }
  resultDisplay.textContent = `The sum of the numbers ${strNumbers} is: ${sum2}`;
});

/*
const usertest = 4;
for (let i = 1; i <= usertest; i++) {
  strNumbers += `+${i}`;
  sum2 += i;
}
console.log(`The sum of the numbers ${strNumbers} is: ${sum2}`);
*/
