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
  const num = parseInt(answer);

  if (isPrime(number)) {
    console.log(`${num} is prime.`);
  } else {
    console.log(`${num} is not prime.`);
  }

  rl.close();
});
