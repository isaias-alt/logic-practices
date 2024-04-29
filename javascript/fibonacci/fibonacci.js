const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fibonacci(num) {
  if (num <= 0) return 'Please enter a positive integer';
  if (num === 1) return '(0)';

  let prev = 0;
  let curr = 1;
  let next;

  let result = '(' + prev + ', ' + curr;

  for (let i = 2; i < num; i++) {
    next = prev + curr;
    result += ', ' + next;
    prev = curr;
    curr = next;
  }

  result += ')';

  return result;

}

rl.question('Enter a number: ', (answer) => {
  const num = parseInt(answer);

  console.log(fibonacci(num));

  rl.close();
});
