'use strict';
/* SUMMARY : 

---> DESTRUCTURING , 
---> SPREAD OPERATOR, 
---> REST OPERATOR ,
---> OR and AND OPERATOR ,
---> NULLISH OPERATOR , 
---> LOGICAL ASSIGNMENT OPERATORS,
---> FOR OF LOOP, 
---> ENHANCED OBJECT LITERALS, 
---> OPTIONAL CHAINING,
---> FOR OF LOOP OBJECTS,
---> SETS AND MAPS
--->WORKING WITH STRINGS
*/

// Data needed for a later exercise

// Data needed for first part of the section
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  // tue
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  // thu
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  // wed
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// console.log(openingHours);
const restaurant = {
  name: 'Classico Italiano',
  location: ['Via Angelo Tavanti, 23', 'Firenze Italy Street, 21'],
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  drinksMenu: ['Cola', 'Sprite', 'Orange Juice', 'Grape Juice', 'Tea'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto', 'PAPA'],
  // ----ENHANCED OBJECT LITERALS
  //getting object outside another --- (old way)
  openingHours: openingHours,
  //new way ----
  openingHours,

  // enhanced methods
  // new way ---- GET RID OF "function" and ":"
  order({ starterIndex, mainIndex }) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // old way --------
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
    locationIndex,
  }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered from ${this.location[locationIndex]} to ${address} at ${time}`
    );
  },
  // My practice
  locationSel: function (catIndex) {
    return [this.categories[catIndex]];
  },
  orderPasta: function (ingredient1, ingredient2, ingredient3) {
    console.log(
      `Three ingredients of your pasta are: ${ingredient1} , ${ingredient2} and ${ingredient3} `
    );
  },
  // My practice 80
  orderingDrink: function (quantity, drinkIndex) {
    if (quantity > 1) {
      console.log(`You choose ${quantity} ${this.drinksMenu[drinkIndex]}s`);
    } else if (quantity === 1) {
      console.log(`You choose ${quantity} ${this.drinksMenu[drinkIndex]}`);
    } else {
      console.log(`[ERROR]Insert a valid quantity`);
    }
  },
  orderPizza: function (mainIngredients, ...restIgredients) {
    console.log(
      `(Main igrendient): ${mainIngredients} (extras): ${restIgredients}`
    );
  },
};

/*
//>>>>>>>>>>> STRINGS

const airLine = 'TAP Air Brazil';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airLine.length);
console.log('B737'.length);

console.log(airLine.indexOf('r'));
console.log(airLine.indexOf('Brazil'));
console.log(airLine.lastIndexOf('r'));

console.log(airLine.slice(4));
console.log(airLine.slice(4, 7));
console.log(airLine.slice(0, airLine.indexOf(' ')));
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));

console.log(airLine.slice(-2));
console.log(airLine.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const seats = seat.slice(-1);
  if (seats === 'B' || seats === 'E') {
    console.log(`The seat ${seat} is in the middle`);
  } else {
    console.log(`The seat ${seat} is NOT in the middle`);
  }
};
checkMiddleSeat('33B');
checkMiddleSeat('32E');
checkMiddleSeat('32C');

console.log(new String('Jonas'));
console.log(typeof new String('Jonas').slice(-1));

console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());
console.log('john'.toUpperCase());

// Fix passenger name
// EXERCICSE
console.log('');
console.log('--- Fix passenger name Exercise ---');

const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);
const passengerFormat =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerFormat);

// EXERCICSE CREATING A REAL FUNCTION

const nameFilter = function (passenger) {
  let passengerName = '';
  passengerName = passenger.toLowerCase();
  passengerName = passenger[0].toUpperCase() + passengerName.slice(1);
  console.log(passengerName);
};
nameFilter('jOhN');

//Comparing Emails Exercise

console.log('--- Comparing Emails Exercise ---');

const email = 'john@git.io';
const HypotheticalloginEmail = '  joHN@GIT.IO \n';

// const lowerEmail = HypotheticalloginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const correctFormatEmail = HypotheticalloginEmail.toLowerCase().trim();
console.log(correctFormatEmail);
// console.log(correctFormatEmail === email);

// EXERCISE WITH A FUNCTION

const properlyFormatted = function (e_mail) {
  let email = '';
  const emailFiltered = e_mail.toLowerCase().trim();
  let equalEmail =
    e_mail === emailFiltered
      ? 'Email was properly formated'
      : `[${e_mail}] E-mail was NOT properly formated,[USE]: ${emailFiltered}`;
  console.log(equalEmail);
};
properlyFormatted('JoN@gmail.cOM');

// replacing a string
const priceBr = 'R$290,10';
const priceUS = priceBr.replace('R$', '$').replace(',', '.');
console.log(priceUS);

const annoucement =
  'All passengers come to boarding door 23, Boarding door 23!';

console.log(annoucement.replace('door', 'gate'));
console.log(annoucement.replaceAll('door', 'gate'));

// Booleans
const airplane = 'Airbus A320neo';
console.log(airplane.includes('A320'));
console.log(airplane.includes('Boeing'));
console.log(airplane.startsWith('Air'));

// We want to check if a plane is part of the new airbus family
if (airplane.startsWith('Air') && airplane.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

// practice exercise - check bag is allowed on the check in

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('gun') || baggage.includes('knife')) {
    console.log('Sorry sir, you can not enter the plane');
  } else {
    console.log('You are free to go');
  }
};

checkBaggage('I got a laptop and a Pocket Knife');
checkBaggage('I got socks and a camera');
checkBaggage('I got a gun');


// Split method

console.log('a+very+nice+string'.split('+'));
console.log('Johnny Blaze'.split(' '));

const [firstName, LastName] = 'Johnny Blaze'.split(' ');
console.log(firstName, LastName);

const newName = ['Mr.', firstName, LastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const nameArray = name.toLowerCase().split(' ');
  const namesUppered = [];

  for (const names of nameArray) {
    console.log(names);
    // namesUppered.push(names[0].toUpperCase() + names.slice(1));
    namesUppered.push(names.replace(names[0], names[0].toUpperCase()));
  }
  console.log(nameArray);
  console.log(namesUppered.join(' '));
};
capitalizeName('john aNn smiTh');

// Paddding

const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  // const nToStr = number + '';
  const nToStr = String(number);
  const last = nToStr.slice(-4);

  return last.padStart(nToStr.length, '*');
};

console.log(maskCreditCard(3323322122349900));
console.log(maskCreditCard(310489123));
console.log(maskCreditCard('33233221223421220'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'<[Ï]>'.repeat(n)}`);
};

planesInLine(5);
planesInLine(2);
planesInLine(12);
*/

// >>>>> String methods practice]
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const flightStr = str => str.toUpperCase().slice(0, 3);

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  console.log(flight.split(';'));
  // const niceStr = `${type.startsWith('_Delayed') ? '🔴' : ''}${type
  //   .replaceAll('_', ' ')
  // CORRECTION PADSTART
  //   .padStart(20, ' ')} from ${flightStr(from)} to ${flightStr(
  //   to
  // )} (${time.replace(':', 'h')})`;
  const niceStr = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${flightStr(from)} to ${flightStr(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(45, '>');

  console.log(niceStr);

  // if (type.includes('Delayed')) {
  //   console.log(`🔴${niceStr}`);
  // } else {
  //   console.log(niceStr);
  // }

  const test = type.includes('Delayed');

  // console.log(niceStr);
}
/*>>>>>>> CHALLENGE #04

underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, words] of rows.entries()) {
    const [first, second] = words.toLowerCase().trim().split('_');
    console.log(first, second);
    const outPut = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${outPut.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`);
  }
});
 */
// const text = document.querySelector('textarea').value;

// const toCamelCase = function (name) {
//   const nameStr = String(name).toLowerCase();
//   const nameFitlter1 = nameStr.slice(0, nameStr.indexOf('_'));
//   const nameFitlter2 = nameStr.slice(nameStr.indexOf('_') + 1);

//   const res =
//     nameFitlter1 + nameFitlter2[0].toUpperCase() + nameFitlter2.slice(1);
//   return res;
// };

// console.log(toCamelCase('JAVAscRipt_Best'));

/* 

Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀


const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'], //illegal
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1
console.log('---Question 1---');
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2
console.log('');
console.log('---Question 2---');

gameEvents.delete(64);
console.log(gameEvents);

//3
console.log('');
console.log('---Question 3---');

const avgEvent = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average , every ${avgEvent / gameEvents.size} minutes `
);

// course way
console.log(
  `An event happened, on average , every ${90 / gameEvents.size} minutes `
);

// 4
console.log('');

console.log('---Question 4---');

for (const [min, event] of gameEvents) {
  if (min <= 45) {
    console.log(`FIRST HALF [${[min]}] : `, event);
  } else if (min > 45) console.log(`SECOND HALF [${[min]}] : `, event);
}

console.log('');
console.log('---Question 4 course solution---');

for (const [min, event] of gameEvents) {
  const halfStr = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`${halfStr} HALF [${min}]: ${event}`);
}
/*
// Maps: Interation
const question = new Map([
  ['question', 'What is the best proggramming Language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert Object to map
console.log('--Object Entries Comparisson--');
console.log(Object.entries(openingHours));
console.log('--Converting an Object into a Map--');
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}:  ${value}`);
  }
}
// const userAnswer = Number(prompt('Your answer'));
const userAnswer = 3;
console.log(userAnswer);

// Convert map into an Array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);


if (userAnswer === 3) {
  window.alert(question.get(true));
} else {
  window.alert(question.get(false));
}
console.log(question.get(question.get('correct') === userAnswer));
/* Maps: Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

//GET - Read data from a Map
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 13;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// Check
console.log(rest.has('categories'));

//Delete
rest.delete(2);

// Arrays
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.get(arr));


const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);
//ES2025 make sets more useful!(more methods)

// get same elements
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection: ', commonFoods);
console.log([...commonFoods]);

// fuse elements
const italianAndMexicanFood = italianFoods.union(mexicanFoods);
console.log('Union: ', italianAndMexicanFood);

// other ways of uniting elements
console.log(new Set([...italianFoods, ...mexicanFoods]));
// converting set back to an array
console.log([new Set([...italianFoods, ...mexicanFoods])]);

// diference method
const italianUnique = italianFoods.difference(mexicanFoods);
console.log('Diference italian: ', italianUnique);

const mexicanUnique = mexicanFoods.difference(italianFoods);
console.log('Diference Mexican: ', mexicanUnique);

const italianAndMexicanUniques = italianFoods.symmetricDifference(mexicanFoods);
console.log(italianAndMexicanUniques);

// check if a set is completly different from another set
console.log(italianFoods.isDisjointFrom(mexicanFoods));

/*
// --------SETS
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);

// Getting the size of a set
console.log(orderSet.size);

// Checking if a element exists in a set
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));

// Adding new elements into a set
// it doesnt matter that we have 2 orders w/ same name sets are unique so it will only be logged one 'Garlic bread' into the console
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);

// Deleting an element from a set
orderSet.delete('Pizza');
console.log(orderSet);

// looping over a set
for (const order of orderSet) console.log(order);
//Deleting all elements from a set
// orderSet.clear();
// console.log(orderSet);

// Example - how to convert set --> array - use brackets and spread
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
>>>> FOR OF LOOP IN OBJECTS
// looping the properties

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of Object.keys(openingHours)) {
  openStr += `${day},`;
}
console.log(openStr);

// looping the property values

const values = Object.values(openingHours);
console.log(values);

// entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
  */
/*>>>>>> OPTIONAL CHAINING

// Without optional chaining - error
// console.log(restaurant.openingHours.mon.open);

// With optional chaining - undefined
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);

  const openTime = openingHours[day]?.open ?? 'no time';
  console.log(`On ${day} we open at ${openTime}`);
  // if (openTime) {
  //   console.log(`On ${day} we open at ${openTime}`);
  // } else {
  //   console.log(`On ${day} we are closed`);
  // }
}

//>> Methods(optional chaining works with methods too)

// this example the method ORDER does exist
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// this example the method ORDERRISOTO does NOT exist
console.log(restaurant.orderRisoto?.(0, 1) ?? 'Method does not exist');

//>> Arrays(optional chaining works with Arrays too)
const users = [{ name: 'John', email: 'john@gmail.com.io' }];
console.log(users[0]?.name ?? 'Users array is empty');
/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Pizz',
  owner: 'Giovaani',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// ------ LOGICAL 'OR' ASSIGNMENT OPERATOR

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// ------ LOGICAL 'AND' ASSIGNMENT OPERATOR
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner = rest1.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);


// NULLISH COALESCING OPERATOR
restaurant.numGuests = 0;
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

// ----- OR and AND Operators 
console.log(`----OR----`);
console.log(3 || 'John');
console.log('' || 0);
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);


const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

console.log(`----AND----`);
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


//------SPREAD IS DONE ON THE RIGHT SIDE OF THE ASSIGN OPERATOR =
// Destructuring
const arr = [1, 2, ...[3, 4]];

// REST IS DONE ON THE LEFT SIDE OF THE ASSING OPERATOR
const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a, b, rest);

const [first, , third, ...restOfTheFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(first, third, restOfTheFood);

// REST IN OBJECTS
// >>>>>REVIEW you can take a property with the exact same name
const { sat, ...restWeekDays } = restaurant.openingHours;
console.log(sat, restWeekDays);

// ---Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    // sum = sum + numbers[i];
    sum += numbers[i];
  }
  //   get last interaction
  console.log(sum);
};
add(2, 3);
add(3, 4, 6, 7);
add(3, 4, 6, 7, 9, 10);
const x = [23, 5, 2];
add(...x);
// my practice
const addEnhanced = function (...values) {
  let add = 0;
  let str = '';
  for (let i = 0; i < values.length; i++) {
    add = add + values[i];
    str += ` + ${values[i]}`;
  }
  console.log(`The total of ${str} is: ${add}`);
};
addEnhanced(2, 3, 4);
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
//my pracice function that takes an array as an argument
const arrFunction = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
arrFunction([3, 2, 3]);
/*My practice 54 (spread)
const drinkSelection = [
  prompt('How many drinks?'),
  prompt('Select the index(1-4):'),
];
restaurant.orderingDrink(...drinkSelection);
/* REAL WORLD EXAMPLE
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Let's make pasta! Ingredient 2?"),
  prompt("Let's make pasta! Ingredient 3?"),
];
// >>>>>HOW TO CALL THE ARRAY IN THE OLD WAY
// restaurant.orderPasta(ingredients[0], ingredients[1] ,  ingredients[2]);
// >>>>> IN THE NEW WAY NOW
restaurant.orderPasta(...ingredients);


// SPREAD OPERATOR IN OBJECTS
const newRestaurant = { founding: 1998, ...restaurant, founder: 'Guisap' };
console.log(newRestaurant);
// shallow copy with spread in obejcts
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant);
console.log(restaurantCopy);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 11',
  mainIndex: 2,
  starterIndex: 2,
  locationIndex: 1,
});

restaurant.orderDelivery({
  address: 'Praga ul Dolce, 21',
})

// ------ DESTRUCTURING OBJECTS
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 99;
let c = 19;
const obj = { a: 23, b: 7, c: 14 };

({ a, b, c } = obj);
console.log(a, b, c);

// Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
/*
<---- you can declare variables ------>
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o,c );


// ------IF WE WANT TO CHANGE THE VARIABLES NAME
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
 -----DESTRUCTURING ARRAYS >>>> MY PRACTICE
const [begin] = restaurant.locationSel(0);
console.log(begin);
// HOW to receive two return values from a function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// NESTED DESTRUCTURING
const nested_0 = [3, 4, [5, 6]];
const [l, , m] = nested_0;
console.log(l, m);

const nested = [2, 5, [6, 7]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// DEFAULT VALUES
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

/*-------- W/OUT DESTRUCTURING
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

/-------- W/ DESTRUCTURING
const [x, y, z] = arr;
console.log(x, y, z);


let [main, , secondary] = restaurant.categories;

 ----- WE WANT TO INVERT THE ELEMENTS FIRST: WITHOUT DESTRUC
console.log(main, secondary);
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);


//  ---- WE WANT TO INVERT THE ELEMENTS NOW: WITHDESTRUC

console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);
*/

/* MY PRACTICE 
let [, , , main, secondary] = restaurant.categories;
// you are reassing the main and secondary elements in the array in order for them to be inverted
[, , main, secondary] = [, , secondary, main];
console.log(main, secondary);


// ######## SPREAD OPERATOR ############
// NOT A GOOD WAY TO GET VALUE OUT FROM ANOTHER ARR INTO THE OTHER ONE
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

// A GOOD WAY USING THE | SPREAD OPERATOR: ... |
const newGoodArray = [1, 2, ...arr];
console.log(newGoodArray);
console.log(...newGoodArray);

// WE ARE NOT MANIPULATING THE mainMenu ARRAY THIS A NEW ARRAY WITH THE EXPANDING INFO FROM THE mainMenu ARR
const newMenu = [...restaurant.mainMenu, 'Pasta'];
console.log(newMenu);

// >>>>> Copying array w/ spread operator
const copyMainMenu = [...restaurant.mainMenu];
console.log(copyMainMenu);

// >>>>>> Merge 2(or+) arrays together
// my way
// const merging = [...restaurant.mainMenu.concat(restaurant.starterMenu)];
// jonas's way
const merging = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(merging);

// WE CAN UNPACK ALL ITERABLES FOR EXAMPLE: STRING
const str = 'Jona';
const letters = [...str, 's'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`) THIS DOESNT WORK CAUSE THE '${}' DOESNT WORK W/ MULTIPLE VALUES SEPARATED BY A COMMA
*/

// >>>>>>>>CHALENGES<<<<<<<<<<<<

/* 
DESCRIPTION: 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


console.log(`Bayer: ${player1}.`);
console.log(`Borussia: ${player2}.`);

// 1 and 2:
console.log('---Bayern Munich---');
const [player1, player2] = game.players;
const [gk, ...fieldPlayers] = player1;
console.log(`Goalkeeper: ${gk}`);
console.log(`Field players:`, ...fieldPlayers);

console.log('---Borrussia Dortmund---');
const [gk2, ...fieldPlayers2] = player2;
console.log(`Goalkeeper: ${gk2}`);
console.log(`Field players:`, ...fieldPlayers2);

//3
const allPlayers = [...player1, ...player2];
console.log('||| All players ||| : ', ...allPlayers);

//4
console.log('---Substitute players---');
const players1Final = [...player1, 'Tiago', 'Coutinho', 'Harry'];
console.log(...players1Final);

//5
console.log('---Game odds---');
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//6
console.log('---Selecting player(s)---');

const printGoals = function (...players) {
  console.log(
    `Players that scored:`,
    ...players,
    `| Total goals:`,
    players.length
  );
};
printGoals('Davies', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7

// team1: 1.33,
// x: 3.25,
// team2: 6.5,

const printOds = function () {
  team1 < team2 && console.log(`Team 1 (odds: ${team1}) is more likely to win`);
  team1 > team2 && console.log(`Team 2 (odds: ${team2}) is more likely to win`);
};
printOds();


// FOR OF LOOP
console.log('---FOR OF LOOP---');
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const item of menu) console.log(item);

//getting the index together with the element
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
//getting the index together with the element with destructuring
console.log(`---WITH DESTRUCTURING---`);
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
console.log([...menu.entries()]);

//extra practice
const arraytest = ['Bro', 'Chico', 'Carro'];
for (const [text, i] of arraytest.entries()) {
  console.log(text, i);
}
console.log([...arraytest.entries()]);
// console.log('---REGULAR LOOP---');
// for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i]);
// }
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
const goalScored = Object.entries(game.scored);
console.log(`--Scored Goals--`);
for (const [goal, player] of goalScored) {
  console.log(`Goal ${Number(goal) + 1}: ${player}`);
}
console.log(`---Game Odds---`);

// 2
const gameOdds = Object.values(game.odds);
/* my way
let sum = 0;
let averageOdd = 0;

for (const x of gameOdds) {
  // in each interaction of the loop it will get sum and add x(1st: x--> 0 + 1.33 = 1.33 , 2nd: x--> 1.33 + 3.25= 4.58 , 3th: x--> 4.58 + 6.5 = 11.08)
  sum += x;
  averageOdd = sum / gameOdds.length;
}
console.log(`The average odd of the games are: ${averageOdd}`);

console.log(gameOdds);

let avg = 0;

for (const odd of gameOdds) avg = avg + odd;
avg = avg / gameOdds.length;
console.log(avg);

// 3

const gameOddsWithTeams = Object.entries(game.odds);
console.log(gameOddsWithTeams);
console.log('');
console.log('');
console.log('');

for (const [key, odds] of gameOddsWithTeams) {
  const teamStr = key === 'x' ? 'draw' : `victory ${game[key]}`;
  console.log(`Odd of ${teamStr}: ${odds}`);
}
*/
