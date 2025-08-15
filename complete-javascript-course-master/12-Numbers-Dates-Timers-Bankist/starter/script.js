'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2025-08-03T14:43:26.374Z',
    '2025-08-05T18:49:59.371Z',
    '2025-08-06T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2025-08-26T14:43:26.374Z',
    '2025-08-28T18:49:59.371Z',
    '2025-08-01T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};
const dateFormated = function (currentDate, locale) {
  const calcDaysPast = (date1, date2) =>
    Math.floor(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPast(new Date(), currentDate);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 0) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  // const day = `${currentDate.getDate()}`.padStart(2, 0);
  // const moth = `${currentDate.getMonth() + 1}`.padStart(2, 0);
  // const year = currentDate.getFullYear();
  // return `${day}/${moth}/${year}`;
  return new Intl.DateTimeFormat(locale).format(currentDate);
};

const displayMovements = function (account, isSorted = false) {
  containerMovements.innerHTML = '';

  const combinedMovsAndDates = account.movements.map((mov, i) => {
    return { movement: mov, movementDate: account.movementsDates.at(i) };
  });

  if (isSorted) combinedMovsAndDates.sort((a, b) => a.movement - b.movement);
  // const movementsSorted = isSorted
  //   ? account.movements.slice().sort((a, b) => a - b)
  //   : account.movements;

  combinedMovsAndDates.forEach(function (objectMov, i) {
    const { movement, movementDate } = objectMov;
    const operationType = movement > 0 ? 'deposit' : 'withdrawal';

    // const currentDate = new Date(account.movementsDates[i]);
    const currentDate = new Date(movementDate);
    const displayDate = dateFormated(currentDate, account.locale);

    const formatedMovement = formatCur(
      movement,
      account.locale,
      account.currency
    );
    const html = `
          <div class="movements__row">
          <div class="movements__type movements__type--${operationType}">${
      i + 1
    } ${operationType}</div> <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formatedMovement}</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
  console.log(combinedMovsAndDates);
};

// IMPLEMENTING SORT
let sortedState = false;

btnSort.addEventListener('click', function (e) {
  sortedState = !sortedState;
  e.preventDefault();
  displayMovements(currentAccount, sortedState);
});

//
const calcDisplayBalance = function (account) {
  // making total of money dynamically
  account.balance = account.movements.reduce(
    (acc, currentMovement) => acc + currentMovement
  );
  const formatedMovement = formatCur(
    account.balance,
    account.locale,
    account.currency
  );

  labelBalance.textContent = `${formatedMovement}`;
};
// // Other to calc interesRate
// const inteRT = (incomes * 1.2) / 100;
// console.log(`One way : ${inteRT}`);
const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((account, curMov) => account + curMov, 0);
  const outcomes = account.movements
    .filter(mov => mov < 0)
    .reduce((account, curMov) => account + curMov, 0);

  const interestRate = account.movements
    .filter(curMov => curMov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter((interest, i, arr) => {
      return interest >= 1;
    })
    .reduce((account, curInterest) => account + curInterest, 0);

  labelSumIn.textContent = formatCur(incomes, account.locale, account.currency);
  labelSumOut.textContent = formatCur(
    Math.abs(outcomes),
    account.locale,
    account.currency
  );
  labelSumInterest.textContent = formatCur(
    interestRate,
    account.locale,
    account.currency
  );
};

// CREATING USERNAMES(e.g: Jonas Schem = jg...)
const createUsernames = function (accountsArr) {
  accountsArr.forEach(function (currentAcc) {
    currentAcc.username = currentAcc.owner
      .toLowerCase()
      .split(' ')
      .map(curNam => curNam[0])
      .join('');
  });
};
createUsernames(accounts);
console.log(accounts);

// UPTADEUI - call: displayMovements ,calcDisplayBalance, calcDisplaySummary
const updateUI = function (account) {
  // Display movements
  displayMovements(account);
  // Display balance
  calcDisplayBalance(account);
  // Display summary
  calcDisplaySummary(account);
};

// Timeout function - (log-of)
const startTimeOut = function () {
  const tick = function () {
    const min = String(Math.trunc(timer / 60)).padStart(2, 0);
    const sec = String(timer % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log user out
    if (timer === 0) {
      clearInterval(time);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }

    //  Decrease 1s
    timer--;
  };

  // Set time to 5 min
  let timer = 120;

  // Call timer every second
  tick();
  const time = setInterval(tick, 1000);
  // we need the timer variable to work with it on the login function
  return time;
};

let currentAccount, time;
// Fake login
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 1;

// Experimenting with API(search for language codes: ISO LANGUAGE TABLE)
// const currentDate = new Date();
// // labelDate.textContent = new Intl.DateTimeFormat('pt-BR').format(currentDate);
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'long',
//   year: 'numeric',
//   weekday: 'long',
// };

// const locale = navigator.language;
// console.log(locale);

// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(
//   currentDate
// );

// Implementing curerrent dates: dd/mm/yyyy
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and Welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;

    // const currentDate = new Date();
    // const day = `${currentDate.getDate()}`.padStart(2, 0);
    // const moth = `${currentDate.getMonth() + 1}`.padStart(2, 0);
    // const year = currentDate.getFullYear();
    // const hour = `${currentDate.getHours()}`.padStart(2, 0);
    // const min = `${currentDate.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${moth}/${year}, ${hour}:${min}`;
    const currentDate = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'numeric',
    };
    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(currentDate);

    // Emptying input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    if (time) clearInterval(time);
    time = startTimeOut();
    // Update UI
    updateUI(currentAccount);
  }
});

// TRANSACTIONS
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    curAcc => curAcc.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add tranfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    updateUI(currentAccount);
  }

  // Reset timer
  clearInterval(time);
  time = startTimeOut();

  // Clearing out inputs
  inputTransferAmount.value = inputTransferTo.value = '';
});

// LOAN
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const incomes = currentAccount.movements.filter(mov => mov > 0);
  const LoanAmount = Math.floor(inputLoanAmount.value);

  const loanIsAllowed = incomes.some(
    anyDepo => anyDepo >= (LoanAmount * 10) / 100
  );
  // HOW JONAS DID IT : if (amount > 0 && currentAccount.movements.some(mov mov >= amount * 0.1))
  if (LoanAmount > 0 && loanIsAllowed === true) {
    setTimeout(function () {
      currentAccount.movements.push(LoanAmount);

      currentAccount.movementsDates.push(new Date().toISOString());

      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';

  // Reset timer
  clearInterval(time);
  time = startTimeOut();
});

// DELETE ACCOUNT
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // check credentials
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      account => account.username === currentAccount.username
    );

    // Removing account
    accounts.splice(index, 1);

    // Clearing UI
    containerApp.style.opacity = 0;

    // Clearing inputs
    inputCloseUsername.value = inputClosePin.value = '';
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// NUMBERS COHERSION
/*
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('E23', 10));
console.log(Number.parseInt('23a', 10));

console.log(Number.parseInt(' 2.5rem  '));
console.log(Number.parseFloat(' 2.5rem  '));

// console.log(parseFloat(' 2.5rem  '));

// Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// Checking if a value is a number
console.log(Number.isFinite(23));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20x'));
console.log(Number.isFinite(23 / 0));

//
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));

//---Math Methods
console.log(Math.sqrt(25));

console.log(Math.max(7, 34, 345, 6));
console.log(Math.max(7, 34, '345', 6));

console.log(Math.max(7, 34, '345px', 6));
console.log(Math.min(7, 34, '345', 6));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6 + 1));

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(randomInt(10, 20));
console.log(randomInt(0, 3));

// Rounding intergers
console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.9));
console.log(Math.floor(23.9));

console.log(Math.trunc(-23.4));
console.log(Math.floor(-23.4));

// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));

console.log(6 % 3);
console.log(7 % 6);

const isEven = n => n % 2 === 0;
console.log(isEven(1));
console.log(isEven(2));
console.log(isEven(3));

labelBalance.addEventListener('click', function () {
  [
    ...document.querySelectorAll('.movements__row').forEach((curRow, i) => {
      // 0,2,4,6
      if (i % 2 === 0) curRow.style.backgroundColor = 'darkgray';
      // 0,3,6,9
      if (i % 3 === 0) curRow.style.backgroundColor = 'ligthgray';
    }),
  ];
});

// 287,460,000,000
const diameterSolar = 287_460_000_000;
console.log(diameterSolar);

const priceInCents = 345_99;
console.log(priceInCents);

const transferFee = 15_00;
const transferFee2 = 1_500;
console.log(transferFee, transferFee2);

const PI = 3.1415;
console.log(PI);

console.log(Number('230_000'));
console.log(parseInt('230_000'));

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(12083258325823858328321413123123123125312n);
console.log(BigInt(832582385832832));

//Operations
console.log(10000n + 10000n);
console.log(47123847314182748412n * 353535636747n);

const huge = 2312418515185n;
const num = 23;
console.log(huge * BigInt(num));

console.log(20n > 15);
console.log(20n === 20);
console.log(20n == 20);
console.log(typeof 20n);

console.log(huge + 'is really big');

// Divisions
console.log(11n / 3n);
console.log(10 / 3);


//Create a date
const now = new Date();
console.log(now);

console.log(new Date('Aug 06 2025 09:49:53'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

//month is zero based!
console.log(new Date(2037, 11, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
// days to miliseconds
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates methods
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getMilliseconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142267780000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);

const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPast = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const d1 = calcDaysPast(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(d1);

const num = 21312543.45;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  // useGrouping: false,
};

console.log('US:', new Intl.NumberFormat('en-US', options).format(num));
console.log('Ger:', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syr:', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  'navigator.language:',
  new Intl.NumberFormat(navigator.language, options).format(num)
);
*/
// setTimeOut
const ingredients = ['olives', 'garlic'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza 🍕 w/: \n ${ing1} , ${ing2}`),
  3000,
  ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('garlic')) clearTimeout(pizzaTimer);

// setTimeInterval

// setInterval(function () {
//   const options = {
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//   };
//   const now = new Date();
//   const date = new Intl.DateTimeFormat('en-US', options).format(now);
//   console.log(date);
// }, 1000);
