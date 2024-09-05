// IF ELSE  - STATEMENT;

//FORM 1:
/*
const requiredAge = 18
const year = 2024
const yourAge = year - 2015

if (yourAge >= requiredAge) {
    console.log(`You have ${yourAge} years old. You are able to drive!`)
} else {
    console.log(`You have ${yourAge} years old. You are not able to drive!`)
}

//FORM 2(video):
const age = 11
const isOldEnough = age >= 18 // The variable already verifies the operation

if (isOldEnough) {
    console.log(`You have ${age} years old. You are able to drive!🔑`)
} else {
    const yearsLeft = 18 - age
    console.log(`You have ${age} years old. You are not able to drive! But we see you in ${yearsLeft} years. :)`)
}

const year = 2024
const birthYear = 1975
const age_2 = year - birthYear

let century
if (birthYear <= 2000) {
    century = 20
} else {
    century = 21
}
console.log(`You have ${age_2} years old, so you're in the ${century}th! century`)*/



//ADVANCING 

/*const age = '18'
if (age === 18) console.log(`You have ${age} years old => ADULT!(STRICT EQUATION)`)

if (age == 18) console.log(`You have ${age} years old => ADULT!(LOOSE EQUATION)`)

const value = Number(window.prompt('Insert your value!'))
console.log(value)
console.log(typeof value)


if (value === 23) {  //23 === 23 
    console.log('CORRECT, is 23')
} else if (value === 22) {
    console.log('CORRECT, is 22')
} else if (value === 2) {
    console.log('CORRECT, is 21')
} else {
    console.log('NOT 23 , 22 , 21 !')
}

if (value !== 23) { //strict diff !== , != loose diff
    console.log('That is not 23, friend!')

}

const HasGoodVision = true
const HasDriverLicense = true

if (!HasDriverLicense && HasGoodVision) {
   console.log('You should drive')
 } else {
     console.log('Someone else should drive!')
 }


const isTired = false

if (HasDriverLicense && isTired && HasGoodVision) {
    console.log('GO AHEAD')
} else {
    console.log('HOLD ON BUB')
}


CHALLENGE #3

const scoreDolphins = (96+108+89)/3 //DONT FORGET PARARENTHESES 
const scoreKoalas = (88+91+110)/3    //CACULATING AVERAGENESS
console.log(scoreDolphins)
console.log(scoreKoalas)

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy')
} else if (scoreDolphins == scoreKoalas){
    console.log('Both win the trophy')
} else {
    console.log('Koalas win the trophy')
}

#BONUS
const scoreDolphins = (100 + 100 + 100) / 3 //DONT FORGET PARARENTHESES 
const scoreKoalas = (100 + 100 + 100) / 3    //CACULATING AVERAGENESS
const minimumScore = 100
console.log(scoreDolphins)
console.log(scoreKoalas)

if (scoreDolphins < minimumScore && scoreKoalas < minimumScore) {
    console.log('Both does not win anything')
} else if (scoreDolphins > minimumScore) {
    console.log('Dolphins win the trophy')
} else if (scoreKoalas > minimumScore) {
    console.log('Koalas win the trophy')
} else if (scoreDolphins === minimumScore && scoreKoalas === minimumScore) {
    console.log('TIE!')
}
    */