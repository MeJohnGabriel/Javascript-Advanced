'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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
  }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  // MY PRACTICE
  locationSel: function (catIndex) {
    return [this.categories[catIndex]];
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 11',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Praga ul Dolce, 21',
});

// ------ DESTRUCTURING OBJECTS
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 99;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

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
*/

// ------IF WE WANT TO CHANGE THE VARIABLES NAME
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
/* -----DESTRUCTURING ARRAYS >>>> MY PRACTICE
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

/*
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
*/
