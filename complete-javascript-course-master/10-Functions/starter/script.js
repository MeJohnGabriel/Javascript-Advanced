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

*/

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
