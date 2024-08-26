/* STRING AND NUMBERS
let js = "amazing";
console.log(45 + 45);
console.log('45' + '45');

console.log('Jonas');
console.log(23);

let firstName = 'Tobias';
console.log(firstName);

let BrazilPopulation = 120000;
console.log('Brazil has ' + BrazilPopulation + ' Brazilians')
4
*/
// DATATYPES:
/*let js = true

console.log(js)
console.log(typeof true)
console.log(typeof js)
console.log(typeof 23)
console.log(typeof 'Bob')

js = 'Great!'
console.log(typeof js)

let year;
console.log(typeof year)

year = 2024
console.log(typeof year)

console.log(typeof null) // THAT IS INCORRECT!

const birthYear = 2004
console.log(birthYear)
birthYear = 2006
console.log(birthYear)
*/


/*// OPERATORS:
const Now = 2024
const BobAge = Now - 1988
const MariaAge = Now - 2000

console.log(MariaAge, BobAge)

// CONCATENATE
const firtsName = 'Bob'
const age = 23
console.log('Your first name is: ' + firtsName + '. And you have ' + age + ' years old')

// MATH OPERATORS
let number = 12 + 2
number += 13 // number = number[that was 14] + 12 => 27
number++ // number = number(that was 27) + 1 => 28
number--
number--
console.log(number)

// COMPARISSON OPERATORS
console.log(BobAge > MariaAge); //   >= , <=
console.log(MariaAge >= 18);

const isFullAge = MariaAge >= 18;
console.log(Now - 1988 > Now - 2000)


MATH and COMPARISSON PART2

const Now = 2024
const BobAge = Now - 1988
const MariaAge = Now - 2000

console.log(BobAge, MariaAge)
console.log(Now - 1988 > Now - 2000)

let x, y
x = y = 25 - 10 - 5
console.log(x, y)

const averageAge = (BobAge + MariaAge) / 2 // PARETHENSIS SO IT DOESN'T DO LIKE: MariaAge / 2 , then + BobAge
console.log(averageAge, BobAge, MariaAge)
*/

//CHALLENGE #01:
/* DATA 01
const massMark = 72
const heightMark = 1.69
const massJohn = 92
const heightJohn = 1.95

// DATA 02
const massMark = 75
const heightMark = 1.69
const massJohn = 112
const heightJohn = 1.95

const BMImark = massMark / (heightMark * heightMark)
const BMIjohn = massJohn / (heightJohn * heightJohn)
const markHigherBMI = BMIjohn > BMImark

console.log(BMIjohn, BMImark)
console.log(markHigherBMI)
*/
/*
const firstName = 'Gabriel'
const job = 'teacher'
const birthYear = 2004
const year = 2024

const me = "I'm " + firstName + ", I'm currently working as a " + job + " and I have " + (year - birthYear) + ' years old'
const meAgain = `I'm ${firstName} I'm currently working as a ${job} , and I have ${(year - birthYear)} years old`
console.log(me)
console.log(meAgain)
*/





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

/*CONVERSIONS AND BOOLEANS
// type conversion
const inputYear = "1991"
console.log(Number(inputYear) + 18)
console.log(Number(inputYear))

// type coercions
console.log('I am ' + 23 + ' years old')
console.log('30' - '15')
console.log('30' / '15') // works with multiplications( * ) too;

let n = '1' + 1
n = n - 1
console.log(n)

let number = 2 + 3 + '4'
console.log(number)

//Truthy and Falsy values


console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas'))
console.log(Boolean({}))

const money = 0;
if (money) {
    console.log('Do not spend a alot!')
} else {
    console.log('Get a job')
}

let height = 0
if (height || height == 0) {
    console.log('Height is defined')
} else {
    console.log('Not defined')
}
*/

/* CONTINUACAO 'IF ELSE'

const age = '18'
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

//SWTICH STATEMENT 
const day = 'monday'

switch (day) {
    case 'monday':
        console.log('Today is monday')
        break
    case 'tuesday':
        console.log('Today is tuesday')
        break
    case 'wednesday':
    case 'thursday':
        console.log('Today you study')
        break
    case 'friday':
        console.log('Today is friday')
        break
    case 'saturday':
        console.log('Today is saturday')
        break
    case 'sunday':
        console.log('Today is sunday')
        break
    default:
        console.log('Not valid day')
}
//COMPARING WITH IF , ELSE STATEMENT:
const day_2 = 'Wednesday'

if (day_2 === 'monday') {
    console.log('Today is monday!')
} else if (day_2 === 'tuesday') {
    console.log('Today is tuesday!')
} else if (day_2 === 'Wednesday' || day_2 === 'Thursday') {
    console.log('Today you study')
} else {
    console.log('Not valid day')
}

// TERNARY OPERATORS OR CONDICIONAL OPERATORS
const age = 12
const drink = age >= 18 ? 'can drink alcohol' : 'can not drink beer!'

console.log(`I am ${age} years old , I ${drink}.`) //TEMPLATE LITERAL CAN HOLD AN EXPRESSION

if (age >= 18) {
    console.log('Can drink alcohool')
} else {
    console.log('Can not drink beer!')
}


#CHALLENGE 04
const bill = 40;
const tip = bill >= 50 && bill <= 300 ? bill * 20 / 100 : bill * 15 / 100
const total = bill + tip

console.log(`The bill was $${bill}, the tip is $${tip} and the total was $${total}`)
*/