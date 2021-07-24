// Javascript program: Number Generator

/*

*** Instructions ***

1 Collect input from a user

2 Convert the input to a number

3 Use Math.random() and the user's number to generate a random number

4 Create a message displaying the random number

*/

let userAnswer = prompt('State a number!');

convertNum = +userAnswer;

if (convertNum) {
    let result = Math.floor(Math.random() * convertNum) + 1;

    console.log(`${result} is between 1 and ${convertNum}`);

    document.querySelector('h2').innerHTML = `${result} is between 1 and ${convertNum}`;
} else {
    console.log('You need to input a number! Try again.')
}
