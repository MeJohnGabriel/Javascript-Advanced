/* ARRAYS
// THIS WAY BELOW IS NOT GREAT TO STORE A LOT OF DATA:

const friend1 = 'Jonas'
const friend2 = 'Gabriel'
const friend3 = 'Steven'

//USE ARRAYS:
const friends = ['Jonas', 'Gabriel', 'Steven']
console.log(friends)


console.log(friends[0])//calling each elemenmt
console.log(friends[1])//calling each elemenmt

console.log(friends.length)////calling the lenght (=3) of the arrays
console.log(friends[friends.length - 1])//calling the last element of the array, friends.length = 3 , - 1 = 2(the position of Steven)

friends[2] = 'Jay'//replacing the element 2(Gabriel) with Jay
console.log(friends)

const FirstName = 'Gabriel'
const mySelf = [FirstName, 'Araújo', 2024 - 2004, 'teacher', friends]
console.log(mySelf)
console.log(mySelf.length)
*/

// CHALLENGE #2 (ARRAYS)
/*
const calcTip = function (billValue) {
    const tip = billValue >= 50 && billValue <= 300 ? billValue * 15 / 100 : billValue * 20 / 100
    const total = billValue + tip
    console.log(`The total was: $${total}(bill: $${billValue} + tip: $${tip})`)
    return tip
}
let theResult1 = (calcTip(100)) //This variable holds the tips
let theResult2 = (calcTip(200)) // The parameters contain the bills
let theResult3 = (calcTip(40))

let billOneValue = 125
let billTwoValue = 200
let billThreeValue = 40

const bills = [`$${billOneValue}`, `$${billTwoValue}`, `$${billThreeValue}`]
console.log(`The values of the the bills are ${bills}`)

const tips = [theResult1, theResult2, theResult3]
console.log(`The values of the the tips are ${tips}`)


#CHALLENGE 02 CONTINUATION WITH SOME IMPROVEMENTS
const calcTip = function (billValue) {
    const tip = billValue >= 50 && billValue <= 300 ? billValue * 15 / 100 : billValue * 20 / 100
    const total = billValue + tip
    console.log(`The total was: $${total}(bill: $${billValue} + tip: $${tip})`)
    return tip
}


const bills = [125, 200, 40]

console.log(`The values of the the bills are: ${bills}`)
let theResult1 = (calcTip(bills[0])) //calcTip receive the argument to use
let theResult2 = (calcTip(bills[1])) // an element in the array "bill"
let theResult3 = (calcTip(bills[2]))

// YOU CAN USE ARRAYS AS PARAMETER TO DO SOMETHING:

const tips = [theResult1, theResult2, theResult3]
console.log(`The values of the the tips are: ${tips}`)

const total = [bills[0] + tips[0] + bills[1] + tips[1] + bills[2] + tips[2]]
console.log(total)


//EXERCISING
//ex 01 : BABY NAMES:
'use strict;'

const babyNames = function (nam) {
    return nam
}
const possibleBabyNames = ['Maria', 'Lara', 'John']
console.log(babyNames(possibleBabyNames[0]))
console.log(babyNames(possibleBabyNames[1]))
console.log(babyNames(possibleBabyNames[2]))

//ex 02: GROCERY STORE:
'use strict;'

const groceryStore = ['apples', 'bread', 'milk', 'eggs']
console.log(groceryStore.length) //how many elements
groceryStore[3] = 'oranges'// REPLACING 'eggs' with 'oranges'
console.log(groceryStore)//loggin before adding butter

groceryStore.push('butter')//ADDING (PUSHING) 'butter' into the array
console.log(groceryStore)//loggin after adding butter

groceryStore.shift()//REMOVING the first element
console.log(groceryStore)

console.log(groceryStore[0])//searching for the first element(bread)

//ex 03: CALCULATE A STUDENT GRADES
//THIS WORKS BUT IT'S BETTER TO USE PARAMETERS SO YOU GET A MORE REUSABLE FUNCTION.
'use strict'

const grades = [85, 90, 78, 92, 88]

function calculateAverage() {//Just to clarify what arguments is receiving
    return (grades[0] + grades[1] + grades[2] + grades[3] + grades[4]) / 5
}

const resultOfTheAverageGrade = calculateAverage()
console.log(`The result of the average grades(${grades}) are ${resultOfTheAverageGrade} points`)

const displayGrades = function (messages) {
    if (messages >= 90) {
        console.log(`Excellent!`)
    } else if (messages >= 70 && messages <= 89) {
        console.log(`Good Job!`)
    } else if (messages < 70) {
        console.log(`Needs Improvement`)
    }
}
const diplayedMessage = displayGrades((resultOfTheAverageGrade))

//THE BEST WAY

const grades = [85, 90, 78, 92, 88]
//The anyGrade parameter is defined as: [85, 90, 78, 92, 88] in
//the varible "const resultOfTheAverageGrade = calculateAverage(grades)".
//So the "return" will calculate each grade by calling(and getting)
//them in the right position
function calculateAverage(anyGrade) {
    console.log(anyGrade)
    return (anyGrade[0] + anyGrade[1] + anyGrade[2] + anyGrade[3] + anyGrade[4]) / anyGrade.length
}

const resultOfTheAverageGrade = calculateAverage(grades)
//The "anyGrade" paramter is now a Array
console.log(`The result of the average grades(${grades}) are ${resultOfTheAverageGrade} points`)

const displayGrades = function (messages) {
    if (messages >= 90) {
        console.log(`Excellent!`)
    } else if (messages >= 70 && messages <= 89) {
        console.log(`Good Job!`)
    } else if (messages < 70) {
        console.log(`Needs Improvement`)
    }
}
displayGrades((resultOfTheAverageGrade))


//LIST OF PEOPLE'S AGES:

const ages = [15, 23, 17, 34, 45]
const sumAges = (anyAge) => (anyAge[0] + anyAge[1] + anyAge[2] + anyAge[3] + anyAge[4]) / 5

const theResult = sumAges(ages)
const totalOfPeople = ages.length
console.log(`The result of the sum of the ages is ${theResult}. And the total o people that participated is ${totalOfPeople}`)


function checkAverageAge(anyAverageAge) {
    if (checkAverageAge > 18) {
        console.log(`The average age is below 18.`)
    } else {
        console.log(`The average age is above 18.`)
    }
    return theResult / anyAverageAge
}
console.log(`The average of these ages is ${checkAverageAge(ages.length)}`)
*/

/////////////////////////////////////////////////////////////////
// OBJECTS!
/*
const JohnObject = {
    firstName: 'John',
    lastName: 'Araujo',
    birthday: 2024 - 2004,
    job: 'Developer',
    friends: ['Luigi', 'Theo', 'Philip']
}
//Challenge
//'John has 3 friends, and his best friend is Luigi'
console.log(`${JohnObject['firstName']} has ${JohnObject.friends.length} friends and his best friend is
${JohnObject.friends[0]}.`)

console.log(JohnObject.lastName)
console.log(JohnObject['lastName'])
const nameKey = 'Name'
//This followed operations results in 'firstName' and 'lastName'
//So it'll get logged the values of each propertie of the object.
console.log(JohnObject['first' + nameKey])
console.log(JohnObject['last' + nameKey])
//Adding properties into an object:
JohnObject.location = 'Salvador-BA'
JohnObject['instagram'] = '@gabriel01'
console.log(JohnObject)

//With brackets you can ssssuse any expressions you like.
//With the dot, you can't.
const object_1 = {
    NameList: ['Jonas', 'Pedro', 'Theo'],
    birthdayList: [2024 - 2004, 2024 - 1987, 2024 - 2000],
    itensList: ['apple', 'oranges', 'lemons']
}

const halfWord = 'List'
//ACESSING AN OBJECT:
console.log(object_1.NameList)
console.log(object_1['NameList'])
console.log(object_1['Name' + halfWord])
console.log(object_1['birthday' + halfWord])
console.log(object_1['itens' + halfWord])

//OBJECT METHODS:
const JohnObject = {
    firstName: 'John',
    lastName: 'Araujo',
    birthYear: 2004,
    job: 'Developer',
    friends: ['Luigi', 'Theo', 'Philip'],
    hasDriverLicense: true,
    // calcAge: function (birthday) {
    //     return 2024 - birthday
    // }
    // calcAge: function () {
    //     // console.log(this)
    //     return 2024 - this.birthYear
    // }
    calcAge: function () {
        // console.log(this)
        this.age = 2024 - this.birthYear
        return this.age
    },
    ////    do it later
    using if , else
        getSummary: function () {
            if (this.calcAge >= 18) {
                this.hasDriverLicense = true
                console.log(`${this.firstName} is a ${this.calcAge()} year old ${this.job} , and he has a driver license`)
            } else if (this.calcAge < 18) {
                this.hasDriverLicense = false
                console.log(`${this.firstName} is a ${this.calcAge()} year old ${this.job} , and he has no driver license`)
            }
        }
    }

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job} , and he has ${this.hasDriverLicense ? `a` : `no`} driver's license.`
    }
}
console.log(JohnObject.getSummary())
*/

//PRACTICING
/*
const object_1 = {
    NameList: ['Jonas', 'Pedro', 'Theo'],
    birthdayList: 2000,
    itensList: ['apple', 'oranges', 'lemons'],
    sum: function (addition) {
        return 2000 + this.birthdayList
    }
}

console.log(object_1.sum())



//CHALENGE #3 - OBJECTS
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

const markBmi = mark.calcBMI()
const jonhBmi = john.calcBMI()

if (markBmi > jonhBmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
} else if (jonhBmi > markBmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
}

//OR YOU CAN ACESSE EACH BMI's RESPECTIVELLY.(BY THE "this")
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
}
*/

//////////////////////////////////////////

//LOOPINGS

//instead of:
/*console.log(`Lifting weighs repetition 1`)
console.log(`Lifting weighs repetition 2`)
console.log(`Lifting weighs repetition 3`)
console.log(`Lifting weighs repetition 4`)
console.log(`Lifting weighs repetition 5`)
console.log(`Lifting weighs repetition 6`)
*/

//use loops
// The `for loop` keeps running while the condition is true
/*

//////// LOOPING ARRAYS 
//lts say you want to log each element of "myArray"
const myArray = [
    'Jonh',
    'Gabriel',
    2024 - 2004,
    'teacher',
    ['Theo', 'Lionel', 'Leo'],
    true
]
//creating a new array that its going to contain the type of 'myArrays'
const types = []

//remember arrays are zero-based. So the loop will start with 0.
//i has to be below the length of the array
for (let i = 0; i < myArray.length; i++) {
    //Reading from myArray array.
    console.log(myArray[i], typeof myArray[i])
    //Filling types array
    // types[i] = typeof myArray[i]
    types.push(typeof myArray[i]) //pushing typeof of myArray into the types array
}
console.log(types)

//Adding an array into another array using loops
const years = [
    1991,
    2007,
    1969,
    2020
]
const age = []

for (let i = 0; i < years.length; i++) {
    age.push(2024 - years[i])
}
console.log(age)


//////// continue and break

const myArray = [
    'Jonh',
    'Gabriel',
    2024 - 2004,
    'teacher',
    ['Theo', 'Lionel', 'Leo'],
    true
]
//#CONTINUE
//we want to log only strings.
console.log(`---LOGGING ONLY STRINGS---`)
for (let i = 0; i < myArray.length; i++) {
    if (typeof myArray[i] !== 'string') continue
    // if the current element is not a string continue to the next element!
    console.log(myArray[i], typeof myArray[i])
}
//#BREAK
//now we want to find a number and after a number is found nothing else is printed.
console.log(`---BREAK THE LOOP WITH NUMBERS---`)
for (let i = 0; i < myArray.length; i++) {
    if (typeof myArray[i] == 'number') break
    // if the current element is not a string continue to the next element!
    console.log(myArray[i], typeof myArray[i])
}


//////backwars looping
const myArray = [
    'Jonh',
    'Gabriel',
    2024 - 2004,
    'teacher',
    ['Theo', 'Lionel', 'Leo'],
    true
]
for (let i = myArray.length - 1; i >= 0; i--) {
    console.log(i, myArray[i])
}

/////loop inside of a loop

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`---Starting exercise ${exercise}---`)

    for (let rep = 1; rep < 6; rep++) {
        console.log(`(Exercise ${exercise}): Lifting weighs repetition ${rep}`)
    }
}

// for (let rep = 1; rep <= 10; rep++) 
'use strict'

let rep = 1
while (rep <= 10) {
    console.log(`Lifiting weighs repetition ${rep}`)
    rep++
}

for (let i = 1; i <= 10; i++) {
    console.log(`Lifiting weighs repetition ${i}`)
}

//keep roling the dice until you hit a six
//not sure if it makes sense

let dices = Math.trunc(Math.random() * 6) + 1
console.log(dices)
while (dices >= 1 && dices <= 5) {
    dices++
    if (dices == !6) break
    console.log(`You rolled a ${dice}`)
}

let dice = Math.trunc(Math.random() * 6) + 1

while (dice !== 6)  {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1
    if (dice === 6) console.log(`You rolled a 6`)
}
*/
"use strict";
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = []; // is on the calcTip
const total = []; //bill + tip

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// console.log(`The TIP is $${calcTip(bills[0])}, And the BILL is $${bills[0]}`)

for (let i = 0; i < bills.length; i++) {
  //i starts at position 0, because arrays are zero based , the condition for this loop
  //to keep running is that bill.length(10) has to be greater than i. And if this condition is true
  // i = i + 1 => until hits 10
  tips.push(calcTip(bills[i]));
  total.push(bills[i] + tips[i]);
}

console.log(`The total is(bills + tips): $${total}`);

//the values with everything $26.4,339.25,202.4,528,44.4,120.75,12,1320,98.9,59.8

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // (adds the current number to the array)
    //"take the current number in the array and add it to sum."
    /*
            For example, if the array is [2, 4, 6]:
    When i = 0, it adds arr[0] (which is 2) to sum.
    When i = 1, it adds arr[1] (which is 4) to sum.
    When i = 2, it adds arr[2] (which is 6) to sum.
    
    */
  }
  return sum / arr.length;
};
// console.log(calcAverage([12, 12, 12]))
console.log(calcAverage(total));
