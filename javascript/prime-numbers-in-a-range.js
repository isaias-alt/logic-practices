/**
 * Exercise 4: Prime Numbers in a Range
 * Write a program that prompts the user for two positive integers n and m (where n < m) and then prints all prime numbers in the range n to m,
 * including n and m if they are prime.
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function printPrimeInARange(n, m) {
  const res = [];
  for (let i = n; i <= m; i++) {
    if (isPrime(i)) {
      res.push(i);
    }
  }
  console.log(`(${res.join(', ')})`);
}

rl.question('Enter a positive integer n (where n < m): ', (answerOne) => {
  rl.question('Enter a positive integer m (where n < m): ', (answerTwo) => {
    const n = parseInt(answerOne);
    const m = parseInt(answerTwo);

    if (n < 1 || m < 1 || n >= m) {
      console.log('Invalid Number. Please enter a positive integer n (where n < m)');
    } else {
      console.log(`Prime numbers in range ${n} to ${m} are: `);
      printPrimeInARange(n, m);
    }

    rl.close();

  });
});