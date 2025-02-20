"use strict";
/*
const fruitCutter = function (fruit) {
  return fruit * 4;
};

// ///////////////////// 3   ,   4
function fruitProcessor(Kiwi, Pineaple) {
  // /////////////////////////     3
  const KiwiPieces = fruitCutter(Kiwi);
  //  //////////////////////////////     4
  const PineaplePieces = fruitCutter(Pineaple);

  const juice = `Juice has ${KiwiPieces} kiwi pieces and ${PineaplePieces} pineaple pieces`;
  console.log(`Number of kiwi pieces: ${KiwiPieces}`);
  console.log(`Number of pineaple pieces: ${PineaplePieces}`);
  return juice;
}

// The fruitcutter function will multiply them by 4
console.log(fruitProcessor(3, 4));
*/
/*
const yearsLeftToRetire = (bYear, firstName) => {
  const age = 2024 - bYear;
  const retirement = 65 - age;
  return `${firstName} : ${retirement} years to retire`;
};
console.log(yearsLeftToRetire(2004, "Gabriel"));
*/
/*
const friends = ["jonas", "gabriel", "jon"];
// retrieve last element of an array
// it's [friends.length - 2] it will get the element before the last, and it follows this order
console.log(friends[friends.length - 2]);
// replacing and element in an array
friends[2] = "Joseph";
console.log(friends);
// arrays can hold variables
const firstName = "John";
// ARRAYS CAN HOLD VARIABLES AND ARRAYS
const mySelf = [firstName, "Araujo", friends];
console.log(mySelf);*/

// TAKING A FURTHER LOOK AT CHALLENGE #2 ABOUT THE CALCTIP
/*
const calcTip = function (billValue) {
  const tip =
    billValue >= 50 && billValue <= 300
      ? (billValue * 15) / 100
      : (billValue * 20) / 100;
  const total = billValue + tip;
  console.log(`The total was: $${total}(bill: $${billValue} + tip: $${tip})`);

  return tip;
};

const bills = [100, 200, 400];

let theResult1 = calcTip(bills[0]);
let theResult2 = calcTip(bills[1]);
let theResult3 = calcTip(bills[2]);
const results = theResult1 + theResult2 + theResult3;
// YOU CAN USE ARRAYS AS PARAMETER TO DO SOMETHING:
const tips = [theResult1, theResult2, theResult3];
console.log(`The values of the the tips are: $${results}`);

const total = [bills[0] + tips[0] + bills[1] + tips[1] + bills[2] + tips[2]];
console.log(total);

// OBJECTS
const johnObject = {
  firstName: "Jonas",
  LastName: "Real",
  Age: 2024,
  Job: "Dev",
  Friends: ["Michael", "Leo", "Philip"],
};
// TO RETRIEVE ELEMENT OF AN OBJECT USE '.'
// ... .. .                         OR '['KEYOFTHEOBJECT']'
//  USING THE BRACKET METHOD ALLOW US TO PUT ANY EXPRESSION WE LIKE
console.log(johnObject.LastName);
console.log(johnObject["LastName"]);
const nameKey = "Name";
// THE METHOD HERE IS COMBING THE STRINGS "first" + nameKey(from the variable = "Name") = "firstName"
// console.log(johnObject["first" + nameKey]);
// console.log(johnObject.Age - 2004);
// SO IT WILL LOG THE KEY "firstName"

// ADDING ELEMENTS
johnObject["LastName"] = "Oliver";
console.log(johnObject);

// WHEN SEEING A FUNCTION INSIDE AN OBJECT, THAT IS A "METHOD"
// THE "THIS" KEYWORD REFER TO THE PROPERTY
const RyanObject = {
  name: "Ryan",
  year: 2025,
  calcAge: function (birthDay) {
    // this.year = 2025
    return this.year - birthDay;
  },
};
// console.log(RyanObject.calcAge(2004));
// console.log(`The name is ${RyanObject.name} and ${RyanObject.calcAge(2004)}`);
console.log(RyanObject.calcAge(2004));
// THE "THIS" KEYWORD REFER TO THE PROPERTY

// LOOPS
// for(initial value ; logical condition ; operation)
// REMMEBER rep++ === (rep = rep + 1)
// THE LOOP WILL KEEP RUNNING IF THE CONDITION IS TRUE
// IF THE REP IS LESS OR EQUAL 11 , DO REP++
for (let rep = 1; rep <= 11; rep++) {
  //   console.log(`Rep ${rep}`);
}
// IF THE SLICES IS MORE THAN 0, DO SLICE--
for (let slice = 10; slice > 0; slice--) {
  console.log(`I ate ${slice} slices`);
}



for (let i = 0; i < array.length; i++) {
  console.log(array[i], typeof array[i]);
}
const array = ["John", 12, "Real", 21];
for (let i = 0; i < array.length; i++) {
  if (typeof array[i] !== "string") continue;
  console.log(array[i], typeof array[i]);
}

for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === "number") break;
  console.log(array[i], typeof array[i]);
}
  
const array = ["John", 12, "Real", 21];
// minus 1 is going to go to the end of the array
for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}

for (let excersice = 1; excersice <= 5; excersice++) {
  console.log(`Exercise ${excersice}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting rep ${rep}`);
  }
}
// HOW TO MERGE ARRAYS
const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];
const arr3 = arr1.concat(arr2);
console.log(arr3);
//

const calc = function (arr) {
  let sum = 0; //accumulator variable
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
};
console.log(calc([2, 3, 4, 5]));*/
//
// console.log(document.querySelector(".messsage").textContent);
document.addEventListener("Keydown", function (e) {
  console.log(e);
});
console.log(e.Key);
