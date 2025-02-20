'use strict';
/*
function calcAge(birthYear) {
  const age = 2025 - birthYear;

  function printAge() {
    let output = `${firstName} is ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //   REVIEW:
      //WHY IT CHANGED FROM JOHN TO STEVE, REMEMBER! JS RUN FIRST IN THE CURRENT SCOPE
      // IN THIS SCOPE(IF-BLOCK) WE HAVE A FIRSTNAME VARIABLE
      // AS A MATTER OF FACT THIS FIRSTNAME IS A COMPLETLY DIFFERENT VARIABLE THAN THE ONE OUTSIDE THIS BLOCK
      //  THEY ONLY HAVE THE SAME NAME
      const firstName = 'Steve';
      const str = `${firstName} is a millenial`;
      console.log(str);

      function add(a, b) {
        // NOTE : EACH PARAMETER IS DEFINED ON ITS OWN SCOPE
        return a + b;
      }
      //  NOTE AGAING THE OUTPUT HERE IS A NEW VARIABLE IF BLOCK "OWNS IT"
      const output = `NEW OUTPUT`;
    }
    console.log(millenial);
    // CALLING ADD FUNCTION HERE WON'T WORK, FUNCTIO R BLOCK SCOPED SO IT ONLY WORKS IN THE IF-BLOCK
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'John';
calcAge(1991);

// Variables hoisting
console.log(me);
console.log(job);
console.log(year);

var me = 'Jon';
let job = 'teacher';
const year = 2044;

//Functions
console.log(addExp(2, 3));

function addDecl(a, b) {
  return a + b;
}
//VAR IN FUNCTIONS ARE UNDEFINED IT'S LIKE SAYING: undefined(2, 3)
var addExp = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// EXAMPLE

// !numProducts  = false(0 is a fale value)
// in this point numProducts is undefined that why it triggers the message.
if (!numProducts) deleteShoppingCart();

var numProducts =1 0;

function deleteShoppingCart() {
  console.log(`All products deleted!`);
}
 
// console.log(this);

const calcAge = function (birthYear) {
  console.log(2025 - birthYear);
  // get its own this keyword
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2025 - birthYear);
  // get the global this
  console.log(this);
};
calcAgeArrow(1921);
 */
/*
const jon = {
  year: 2004,
  calcAge: function () {
    // console.log(this);
    console.log(2034 - this.year);
  },
};
jon.calcAge();

const matt = {
  // that "this" from jon object is pointing to the year of matt object
  year: 2027,
};
// method calling
matt.calcAge = jon.calcAge;
matt.calcAge();

const f = {
  year: 2001,
};
f.calcAge = matt.calcAge;
f.calcAge();
*/

// var firstName = 'Matt';
/*
const jon = {
  firstName: 'Jonas',
  year: 2004,
  calcAge: function () {
    // console.log(this);
    console.log(2024 - this.year);
    // solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };
    // solution 2
    // using the arrow function here works because now it'll inherit the 'this' from the parent
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
      // console.log(this.year >= 1981 && this.year <= 1996);
    };
    // regular function call even though it happens inside of a method
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jon.greet();
jon.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
*/
/*
const jessica1 = {
  firstName: 'Jessica',
  lastName: 'William',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, 'Davis');
// NOT COPYING THE OBJECT, COPYING ITS REFERENCE
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'William',
  age: 27,
  family: ['John', 'Mary'],
};

// Shallow Copy
const jessicaCopy = { ...jessica2 };
jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Alice');
// jessicaCopy.family.push('Bob');

// console.log('Before', jessica2);
// console.log('After', jessicaCopy);

// Deep Copy or Deep Clone

const jessicaClone = structuredClone(jessica2);

jessicaClone.family.push('Alice');
jessicaClone.family.push('Bob');

console.log('Before clone', jessica2);
console.log('After clone', jessicaClone)      ;
*/
