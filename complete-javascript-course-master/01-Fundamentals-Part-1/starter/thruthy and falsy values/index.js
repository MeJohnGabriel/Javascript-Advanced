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