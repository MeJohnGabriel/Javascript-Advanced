"use strict";

const btnGet = document.querySelector("#getBtn");
const displayResult = document.querySelector("#result");

btnGet.addEventListener("click", function () {
  let inputNumber = document.getElementById("userNumber").value;
  let inputNumberNum = parseFloat(inputNumber);
  if (!inputNumberNum) {
    displayResult.textContent = `[ERROR] Insert a valid number`;
  } else {
    const farenheit = (inputNumberNum * 9) / 5 + 32;
    //   console.log(`${inputNumber} in farenheit is ${farenheit}`);
    displayResult.textContent = `${inputNumberNum} °C in farenheit is ${farenheit} °F`;
  }
});
