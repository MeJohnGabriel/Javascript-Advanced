/* STRICT MODE:

'use strict';

let hasDriverLiscense = false
const passtTeste = true
if (passtTeste) hasDriversLiscense = true
if (hasDriverLiscense) console.log('I can')

/*
// FUNCTIONS NO PARAMETERS:

function logger() {
    console.log('My name is Gabriel')
}
logger()
logger()
logger()

    FUNCTIONS WITH PARAMETERS:

 function fruitProcessor(Kiwi, Pineaple) {
   const juice = `The juice is made of ${Kiwi} Kiwi and ${Pineaple} Pineaple`
    return juice
}
const X = fruitProcessor(3, 1)
console.log(X)

const _juice = fruitProcessor(4, 6)
console.log(_juice)

const anotherJuice = fruitProcessor(2, 6)
console.log(anotherJuice)


// This parameters "(students, friends) are EMPTY but will be defined in the ARGUMENTS"
function studentsLogged(students, friends) {
    const numberOfStudents = `The class has ${students} students but only ${friends} are friends`
    return numberOfStudents
}

// --> The return will say what you want this function to return in this case the variable
// that contains the string
// --> Here you are giving an argument "defining the values of students and friends"
// --> You can put like this but in this wat you are NOT KEEPING the values storaged.

studentsLogged(10, 23)
console.log(studentsLogged(10, 23))
// Here is how you also show in the console but also KEEPING the value storaged.
const totalStudents = studentsLogged(10, 23)
console.log(totalStudents)

const totalStudentsClass2 = studentsLogged(24, 21)
console.log(totalStudentsClass2)


function babyNames(name1, name2) {
    const Possibilities = `Boy will be ${name1}, if it's a girl will be ${name2}`
    return Possibilities
}
const theChoosesNames = babyNames('Alex', 'Alicia')
console.log(theChoosesNames)
After tests we see that the function executes the condicional blocks
perfectly it responds alongly with the arguments OBS: the const

function material(m1, m2) {
    const myMaterialNumber = `The total is: ${m1} pencils and ${m2} erasers`
    if (m1 === 0) {
        console.log("You don't have any pencils")
    } else if (m2 === 0) {
        console.log("You don't have any erasers")
    } else if (m1 >= 20 || m2 >= 20) {
        console.log("You have a lot of things, share with the others")
    }
    return myMaterialNumber
}
const totalMaterial = material(21, 3)
console.log(totalMaterial)

#FUNCTION DECLARATIONS:

function calcAge(birthYear) {
    const age = 2024 - birthYear
    return age
}
const youAge = calcAge(2004)
console.log(youAge)

--> You can just return the calculation(expression):

function calcAge(birthYear) {
    return 2024 - birthYear
}
const yourAge = calcAge(2004)
console.log(yourAge)

#FUNCTION EXPRESSIONS:

-->You can just return the calculation(expression) like above
-->But I want to do with a variable:

const calcAge2 = function (birthYear) {
    const age = 2024 - birthYear
    return age
}
const myAge = calcAge2(2004)
console.log(myAge)

MY EXAMPLE:
const choosingTheNames = function (nam1, nam2) {
    const babyNames = `Boy is ${nam1} , Girl is ${nam2}`
    return babyNames
}
const choosenBabyNames = choosingTheNames("Alex", "Alicia")
console.log(choosenBabyNames)
*/


//ARROW FUNCTIONS
/*
const calcAge3 = birthYear => 2024 - birthYear
const age = calcAge3(2004)
console.log(age)

const yearsLeftForRetirement = birthYear => {
    const age = 2024 - birthYear
    const retirement = 65 - age
    return retirement
}
const retirements = (yearsLeftForRetirement(2004))
console.log(retirements)

const yearsLeftForRetirementWithParameters = (birthYear, FirstName) => {
    const age = 2024 - birthYear
    const retirement = 65 - age
    return `${FirstName} has ${age} years old, and he's going to be retired in ${retirement} years.`
}
const resRetirement = yearsLeftForRetirementWithParameters(2004, "Gabriel")
console.log(resRetirement)

>>>MY EXAMPLE:
const babyNames = (name1, name2) => {
    const babies = `If boy it is ${name1} and if it is a girl is ${name2}`
    return babies
}
console.log(babyNames('Gabriel', 'Susan'))
/*

FUNCTION CALLING OTHER FUNCTIONS:
const fruitCutter = function (fruit) {
    return fruit * 4
}
function fruitProcessor(Kiwi, Pineaple) {
    const KiwiPieces = fruitCutter(Kiwi)
    const PineaplePieces = fruitCutter(Pineaple)

    const juice = `The juice is made of ${KiwiPieces} Kiwi pieces and ${PineaplePieces} pieces Pineaple`
    return juice
}
console.log(fruitProcessor(3, 4))


const materialShare = function (material) {
    return material / 2
}
function material(m1, m2) {
    const sharedPencils = materialShare(m1)
    const shareErasers = materialShare(m2)

    const myMaterialNumber = `The student shared: ${sharedPencils} pencils and ${shareErasers} erasers`
    return myMaterialNumber
}
console.log(material(8, 6))


// REVIEWING FUNCTION

const calcAge = function (birthYear) {
    return 2024 - birthYear
}

const yearsLeftForRetirement = function (birthYear, FirstName) {
    const age = 2024 - birthYear
    const retirement = 65 - age
    if (birthYear <= 1959) {
        return `${FirstName} already retired.`
    } else if (birthYear <= 1960) {
        return `${FirstName} retires in ${retirement} year`
    } else {
        return `${FirstName} retires in ${retirement} years`
    }
}
console.log(yearsLeftForRetirement(2004, 'Bob'))
console.log(yearsLeftForRetirement(1960, 'Bob'))
console.log(yearsLeftForRetirement(1959, 'Bob'))
*/
/*

MINE WAY SELECTED:

const calcAverageScoreOfTheGame = (av1, av2, av3) => {
    const averageScoreDolphins = `${av1}`
    const averageScoreKoalas = `${av2}`
    const averageScoreTotal = `${av3}`
    return `The Dolphins scored: ${averageScoreDolphins} points total. The Koalas scored: ${averageScoreKoalas} points total, and total points scored in the Games is ${averageScoreTotal} points!`
}
const AvgScoreDolphins = (44 + 33 + 71) / 2
const AvgScoreKoalas = (65 + 54 + 49) / 2
console.log(calcAverageScoreOfTheGame(AvgScoreDolphins, AvgScoreKoalas, AvgScoreDolphins + AvgScoreKoalas))

function checkWinner(avgDolphins, avgKoalas) {
    if (AvgScoreDolphins > AvgScoreKoalas) {
        return `The Dolphins win the throphy (${AvgScoreDolphins} vs ${AvgScoreKoalas})`
    } else if (AvgScoreKoalas > AvgScoreDolphins)
        return `The Koalas win the throphy (${AvgScoreKoalas} vs ${AvgScoreDolphins})`
    else {
        return `No one wins...`
    }
}
console.log(checkWinner(`${AvgScoreDolphins},${AvgScoreKoalas}`))

#MY WAY USING ONE LINE FUNCTION:

const calcAverageScoreOfTheGame = (av1, av2, av3) => (av1 + av2 + av3) / 3

const AvgScoreDolphins = calcAverageScoreOfTheGame(41, 23, 24)
const AvgScoreKoalas = calcAverageScoreOfTheGame(24, 22, 10)
console.log(calcAverageScoreOfTheGame(AvgScoreDolphins, AvgScoreKoalas, AvgScoreDolphins + AvgScoreKoalas))

function checkWinner(avgDolphins, avgKoalas) {
    if (AvgScoreDolphins > AvgScoreKoalas) {
        return `The Dolphins win the throphy (${AvgScoreDolphins} vs ${AvgScoreKoalas})`
    } else if (AvgScoreKoalas > AvgScoreDolphins)
        return `The Koalas win the throphy (${AvgScoreKoalas} vs ${AvgScoreDolphins})`
    else {
        return `No one wins...`
    }
}
console.log(checkWinner(AvgScoreDolphins, AvgScoreKoalas))

*/
// HIS WAY SELECTED:
/*const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 2, 3));//olny test

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
};
checkWinner(scoreDolphins, scoreKoalas);*/

//EXERCISING
/*

const choosenBabyNames = (name1, name2) => {
    const BabyNames = console.log(`If its a boy the name will be ${name1} , if its a girl will be ${name2}`)
    if (name1 === 'Marcos') {
        console.log(`Its a boy!`)
    } else if (name2 === 'Linda') {
        console.log('Its a girl!')
    }
    return BabyNames;
}
choosenBabyNames('Marcos', 'Linda')

    //CHANGING INTO A ONE LINE CODE:

const chosingBabyNames = (a, b) => console.log(`If its a boy will be ${a}, and if its a girl will be ${b}`)
chosingBabyNames('Gabriel', 'Maria')

*/

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
