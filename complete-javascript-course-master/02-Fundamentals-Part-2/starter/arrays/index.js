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