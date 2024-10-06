// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*const x = '23';

const calcAge = birthYear => 2037 - birthYear;
//IMPORTANT
//BUG
//NOTE
//REVIEW

//problem solver":

const temper = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
//how to write the max and min temperature?
//what does a sensor error looks like?
//2) the sub problems:
// -- how to igonre erros
// -- find min value in the array
// -- find max value in the array
// -- substract min from max to get (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > max) max = temps[i];
    if (currentTemp < min) min = temps[i];
  }
  console.log(`The max value is ${max}`);
  console.log(`The min value is ${min}`);
  return max - min;
  //NOTE HERE IS THE BREAKDOWN:
  
    --> is 2 greater than 2? No, so the loop will keep running.
    //OBS: The current value is going to be the max at the current moment
    --> is 4 greater than 2? Yes, so now 4 is the max value. 
    --> is 7 greater than 4? Yes, so now 7 is the max value. 
    --> Then the loop will stop because it has got the max value.
    
  //NOTE MY WAY TO GET THE MINIMUM
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] < min) min = temps[i];
  }
  console.log(min);z
 
};
// calcTempAmplitude([2, 'error', 4, 7]);
const amplitude = calcTempAmplitude(temper);
console.log(amplitude);

//function should now receive two arrays.
//  --> How to merge two arrays
//  --> Use the ".concat" operator. like the following e.g.
/* 
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);

const calcTempAmplitudeNew = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > max) max = temps[i];
    if (currentTemp < min) min = temps[i];
  }
  console.log(`The max value is ${max}`);
  console.log(`The min value is ${min}`);

  return max - min;
};
const temper2 = [2, 5, 7, 3, 1, 9, 19];
const amplitudeNew = calcTempAmplitudeNew(temper, temper2);
console.log(amplitudeNew);
const temper = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'Celsius',
    // value: Number(window.prompt('Degree Celsius:')),
    value: 10,
  };
  console.table(measurement);
  const numberKelvin = measurement.value + 273;
  return numberKelvin;
};

console.log(measureKelvin());

//Using a debugger:

const calcTempAmplitudeBug = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  console.log(temps);
  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > max) max = temps[i];
    if (currentTemp < min) min = temps[i];
  }
  console.log(`The max value is ${max}`);
  console.log(`The min value is ${min}`);

  return max - min;
};
const temper2 = [2, 5, 7, 3, 1, 9, 19];
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);

//My way:
const printForecast = function () {
  //log this string "... 17.C in 1 days ... 21.C in 2 days ... 23.C in 3 days ..."
  //test data: [17 , 21 , 23]
  const arr = [17, 21, 23, 24, 23, 64, -5];
  console.log(arr.length);
  for (let i = 0; i < arr.length; i++) {
    console.log(`... ${arr[i]} in ${1 + Number([i])} day(s) ...`);
  }
  // console.log(temp1 , temp2 , temp3)
};

printForecast();
//The other way(that uses string)
//The X of the question was how to show a loop as a string
//Basically to do that you create an empty variable(globally)


///////  (The couse solution)

const arr = [17, 21, 23];

const printForecastNew = function (data) {
  let res = ' ';
  for (let i = 0; i < arr.length; i++) {
    res = res + `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log(res);
};
printForecastNew(arr);

//---(My solution as a string)
const data1 = [17, 21, 23, 24, 23, 64, -5];
const data2 = [7, 11, -34, 76];

const printForecast = function (arr) {
  let res = '';
  for (let i = 0; i < arr.length; i++) {
    res += `${arr[i]}ºC in ${1 + i} day(s) ... `;
  }
  console.log(`... ${res}`);
};
printForecast(data1);


//////////////////  My exercise #1

//combine the arrays(data1 data2)
//// 1) Problem is how to show freezing temperature IF the temperature is below zero.
//   2) log this string:  ... 17ºC in 1 day(s) ... 21ºC in 2 day(s) ... 23ºC in 3 day(s) ... 24ºC in 4 day(s) ... 23ºC in 5 day(s) ... 64ºC in 6 day(s) ... Warning: Freezing temperature! -5ºC in 7 day(s) ... 7ºC in 8 day(s) ... 11ºC in 9 day(s) ... Warning: Freezing temperature! -34ºC in 10 day(s) ... 76ºC in 11 day(s) ...
const arr_1 = [17, 21, 23, 24, 23, 64, -5];
const arr_2 = [7, 11, -34, 76];

const enhancedForecast = function (data1, data2) {
  let str = '';
  let str2 = '';
  for (let i = 0; i < data1.length; i++) {
    //if the current number in the array is below -0:
    if (data1[i] < 0) {
      str += `Warning freezing temperature!(${data1[i]}) in ${i + 1} days(s)`;
    } else
      str += `The temperature will be: ${data1[i]}ºC in ${i + 1} day(s)  --> `;
  }
  for (let i = 0; i < data2.length; i++) {
    if (data2[i] < 0) {
      str2 += `Warning freezing temperature!(${data2[i]}) in ${
        i + 1
      } days(s) --> `;
    } else str2 += `The temperature will be: ${data2[i]}ºC -->  `;
  }
  console.warn('DATA TEST #1: ');
  console.log(` --> ${str}`);
  //if you want to put the result together simply continue to log'em in the same string
  //So this ${str2} will not be necessary.
  console.warn('DATA TEST #2: ');
  console.log(` --> ${str2}`);

  // console.log(`<<< THE SECOND DATA >>>`);
  // console.log(` --- ${str2} `);
};
enhancedForecast(arr_1, arr_2);

//My
const data1 = [17, 22, 35, 28, 23];
const data2 = [24, 11, 40, 26];

const tempCohersion = function (arr1, arr2) {
  let result = '';
  let result_2 = '';

  const FareheitCohersion = tempC => (9 / 5) * tempC + 32;

  for (let i = 0; i < arr1.length; i++) {
    const toFarenheit = FareheitCohersion(arr1[i]);
    if (toFarenheit > 90) {
      result += ` !! Warning hot temperature: ${toFarenheit} at day ${
        i + 1
      } !! `;
    } else if (toFarenheit <= 90) {
      result += ` Current temperature: ${toFarenheit}ºF |`;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const toFarenheit = FareheitCohersion(arr2[i]);
    if (toFarenheit > 90) {
      result_2 += ` Warnin hot temperature ${toFarenheit} at day ${i + 1} |  `;
    } else if (toFarenheit <= 90) {
      result_2 += ` Current temperature: ${toFarenheit}ºF |`;
    }
  }

  console.warn(`DATA #1.1`);
  console.log(result);
  console.warn(`DATA #1.2`);
  console.log(result_2);
};
tempCohersion(data1, data2);
*/
////////NEW EXERCISE

//PROBLEMS
/*
1 -- Loops through each array.
2 -- Calculates the average temperature for both cities.
3 -- Logs if any day had an extreme temperature (above 35°C or below 5°C).
4 -- Converts each temperature to Fahrenheit using the formula (tempC * 9/5) + 32 and logs it.
EXPCTED OUTPUTS:
City 1 Average Temperature: 25°C
Day 2: Extremely hot at 36°C (96.8°F)
City 2 Average Temperature: 18°C
Day 5: Extremely cold at 4°C (39.2°F)
*/
const cityTemps1 = [16, 36, 25, 28, 33, 15, 9];
const cityTemps2 = [8, 30, 39, 11, 3, 13, 38];

console.log(`DATA #01`);

const analyzeTemperatures = function (data1, data2) {
  let sum1 = 0;
  let sum2 = 0;

  let str1 = '';
  let str2 = '';

  let accumulatorAverage1 = 0;
  let accumulatorAverage2 = 0;

  for (let i = 0; i < data1.length; i++) {
    //sum1 = sum1 + data1[i];
    sum1 += data1[i];
    accumulatorAverage1 = sum1 / data1.length;
    console.log(`${data1[i]}°C at day ${[i + 1]}`);

    if (data1[i] > 30) {
      str1 += ` Extremely hot temperature ${data1[i]} °C at day ${i + 1}  ||| `;
    } else if (data1[i] <= 15) {
      str1 += ` Extremely cold temperature ${data1[i]} °C at day ${i + 1} ||| `;
    }
  }
  console.log(
    `City 1 - Average temperature current week: ${accumulatorAverage1}`
  );
  console.log(str1);
  console.log(`DATA #02`);

  for (let i = 0; i < data2.length; i++) {
    console.log(`${data2[i]}°C at day ${[i + 1]}`);
    sum2 += data2[i];
    accumulatorAverage2 = sum2 / data2.length;

    if (data2[i] > 30) {
      str2 += ` Extremely hot temperature ${data2[i]} at day ${i + 1} ||| `;
    } else if (data2[i] < 30) {
      str2 += ` Extremely cold temperature ${data2[i]} at day ${i + 1} ||| `;
    }
  }

  console.log(
    `City 2 - Average temperature of current week: ${accumulatorAverage2}`
  );
  console.log(str2);
};
analyzeTemperatures(cityTemps1, cityTemps2);
