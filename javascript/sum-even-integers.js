/**
 * Exercise 1: Addition of even integers
 * Write a program that adds all the even integers from 1 to 100 and prints the result.
 */

function sumEvenNumbers() {
  let result = 0;

  for (let i = 2; i <= 100; i += 2) {
    result += i;
  }

  return result;
}

console.log(`The addition result is: ${sumEvenNumbers()}`);