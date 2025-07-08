'use strict';
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  /*same thing as this:  
  const booking = {
  flightNum: flightNum,
  numPassengers: numPassengers,
  price: price,
 };

  console.log(booking);
  bookings.push(booking);
};

createBooking('HFG12');
createBooking('HFG12', 2, 800);

// to skip a parameter in an argument we dont do this:
createBooking('HFG12', 100); //this 800 would still be maped to the third parameter

// we do this:
createBooking('JHG12', undefined, 200);


const flight = 'LG222';
const jonh = {
  name: 'Johnny Bravo',
  passport: 3123436451,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LS120';
  passenger.name = 'Mr' + passenger.name;

  if (passenger.passport === 3123436451) {
    console.log('Checked in!');
  } else {
    console.log('Wrong passport!');
  }
};

// checkIn(flight, jonh);
// console.log(flight);
// console.log(jonh);

// Is the same as doing...
// const flightNum = flight
// const passenger = jonas

// this function will cause problems with the jonh object
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(jonh);
checkIn(flight, jonh);



const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFistWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFistWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('5!');
};

document.body.addEventListener('click', high5);

['Jonas', 'Leoi', 'Puskas'].forEach(high5);

// Functins that returns other functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Jon');

greet('Hello')('Jhon');


const Lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}` });
  },
};

Lufthansa.book(239, 'John');
Lufthansa.book(24, 'Lox');
console.log(Lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const bookFn = Lufthansa.book;

// Does NOT work
// bookFn(23, 'Sergio');

// Call Method:
bookFn.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

bookFn.call(Lufthansa, 231, 'Lukaku');
console.log(Lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

bookFn.call(swiss, 543, 'Mary');

// Apply Method:
const flightData = [583, 'Georgie'];
bookFn.apply(swiss, flightData);
console.log(swiss);

// 'Apply' is not really used in modern JS we use the spread operator now
bookFn.call(swiss, ...flightData);

// The Bind Method

const bookEW = bookFn.bind(eurowings);
const bookLH = bookFn.bind(Lufthansa);
const bookLX = bookFn.bind(swiss);

bookEW(23, 'Steven');

// with event listeners
Lufthansa.planes = 300;

Lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// document.querySelector('.buy').addEventListener('click', Lufthansa.buyPlane);
document
  .querySelector('.buy')
  .addEventListener('click', Lufthansa.buyPlane.bind(Lufthansa));

//Partial Application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value + 0.23;  would be the same as this
console.log(addVAT(100));
console.log(addVAT(23));

// challenge done!
const taxCalc = function (value) {
  return function (rate) {
    console.log(value + value * rate);
  };
};
const taxtRes = taxCalc(200);
taxtRes(0.1);
*/

/*Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀 */
const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: Javascript', '1: Python', '2:Rust', '3: C++'],
  // this generates [0,0,0,0]
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const option = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    // increse value at the current position
    if (
      typeof option === 'number' &&
      option >= 0 &&
      option < this.answers.length
      // we could've used short circuitng
      /*typeof option === number && option < this.answers.length && <- from here, if everythign is true do this: this.answers[option]++;  */
    ) {
      this.answers[option]++;
    } else {
      alert('Please, insert a valid option');
    }
  },

  displayResults(type = 'array') {
    if (type === 'string') {
      console.log(`The pool results is: ${this.answers.join(', ')}`);
    } else if (type === 'array') {
      console.log(this.answers);
    }
  },
};

const addpoll = function () {
  poll.registerNewAnswer();
  poll.displayResults();
  poll.displayResults('string');
};
document.querySelector('.poll').addEventListener('click', addpoll);

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
console.log(poll.answers);
// [5, 2, 3]
// [1, 5, 3, 9, 6, 1];
