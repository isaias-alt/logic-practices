/**
 * Exercise 2: Prime numbers
 * Write a program that prompts the user for a positive integer greater than 1 and determines whether that number is prime or not. 
 * A prime number is one that is only divisible by 1 and itself.
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

rl.question('Enter a number to check if it is prime or not: ', (answer) => {
  const number = parseInt(answer);

  if (isPrime(number)) {
    console.log(`${number} is prime.`);
  } else {
    console.log(`${number} is not prime.`);
  }

  rl.close();
});
