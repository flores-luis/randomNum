/**
 * 
 * Returns a random number between two numbers.
 * 
 * 
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @returns {number} The random number value.
 */

 function getRandomNumber(lower,upper = 100) {
    const randomNumber =  Math.floor(Math.random() * (upper - lower + 1)) + lower;
    return randomNumber;
 };

 // Call the function and pass it different values.

console.log(getRandomNumber(1,6));
console.log(`${getRandomNumber(10,100)} is a random number between 10 and 100`);
console.log(getRandomNumber(200,50));