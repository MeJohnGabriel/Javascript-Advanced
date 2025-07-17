'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  // .textContent = 0;

  movements.forEach(function (curMov, i) {
    const operationType = curMov > 0 ? 'deposit' : 'withdrawal';

    const html = `
          <div class="movements__row">
          <div class="movements__type movements__type--${operationType}">${
      i + 1
    } ${operationType}</div>
          <div class="movements__value">${curMov}</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const user = 'Steven Thomas Williams';
const userName = user
  .toLowerCase()
  .split(' ')
  .map(function (curNam) {
    return curNam[0];
  })
  .join('');

console.log(userName);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*



const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, 2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE

// console.log(arr.splice(2));
// arr.splice(-1);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join('-'));

// AT 
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//Getting last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));


//FOR EACH LOOP

const movements = [200, 450, -400, 3000, 650, -130, 70, 1300];

for (const [index, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`Movement ${index + 1} You deposited ${mov}`);
  } else {
    console.log(`Movement ${index + 1} You withdrew ${Math.abs(mov)}`);
  }
}

console.log(`---FOR EACH----`);
movements.forEach(function (mov, index, arr) {
  if (mov > 0) {
    console.log(`Movement ${index + 1} You deposited ${mov}2`);
  } else {
    console.log(`Movement ${index + 1} You withdrew ${Math.abs(mov)}`);
  }
});


// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (curEl, key, map) {
  console.log(`${key}: ${curEl}`);
});

// Set
const currenciesUniq = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

currenciesUniq.forEach(function (value) {
  console.log(`${value}: ${value}`);S
});

// CHALLENGE 1
// NOT PUPPY >3 , IS PUPPY<3

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKatie = [10, 5, 6, 1, 4];

const checkDogs = function (arr1, arr2) {
  const Julia = arr1.splice(1, 2);
  const Katie = arr2.splice(0);

  const dogs = Julia.concat(Katie);
  console.log(dogs);

  dogs.forEach(function (currentDogAge, i) {
    const isPuppy =
      currentDogAge > 3
        ? `Dog number ${i + 1} is an adult`
        : `Dog number ${i + 1} is a puppy 🐶`;
    console.log(isPuppy);
  });
};
checkDogs(dogsJulia, dogsKatie);


const movements = [200, 450, -400, 3000, 650, -130, 70, 1300];

const eurToUsd = 1.1;

const res = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movements, res);

// With for-of
// We manuallu create the new arr(res2)
const res2 = [];
for (const mov of movements) {
  res2.push(mov * eurToUsd);
}
console.log(res2);

// Using maps w/ arrow functions
const res3 = movements.map(mov => mov * eurToUsd);
console.log(res3);

const movDescript = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movDescript);
*/
