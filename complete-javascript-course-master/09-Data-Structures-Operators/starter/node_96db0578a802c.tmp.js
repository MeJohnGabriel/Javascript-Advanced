'use strict';
// SUMMARY :  DESTRUCTURING , SPREAD OPERATOR, REST OPERATOR , OR and AND OPERATOR , NULLISH OPERATOR , LOGICAL ASSIGNMENT OPERATORS
// Data needed for a later exercise

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: ['Via Angelo Tavanti, 23', 'Firenze Italy Street, 21'],
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  drinksMenu: ['Cola', 'Sprite', 'Orange Juice', 'Grape Juice', 'Tea'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto', 'PAPA'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function ({ starterIndex, mainIndex }) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
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
*/

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const item of menu) console.log(item);

for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}
