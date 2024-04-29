const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return false;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function printPrimeInARange(n, m) {
  if (n >= m) return 'Invalid input: n must be less than m.';
  if (n < 1 || m < 1) return 'Invalid Number. Please enter a positive integer n (where n < m)';

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

    console.log(`Prime numbers in range ${n} to ${m} are: `);
    printPrimeInARange(n, m);

    rl.close();

  });
});