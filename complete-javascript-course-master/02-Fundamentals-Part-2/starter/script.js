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
*/
/* After tests we see that the function executes the condicional blocks
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
*/

/*

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

console.log(material(8, 4))