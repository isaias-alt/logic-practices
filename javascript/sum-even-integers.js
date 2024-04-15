/**
 * Exercise 1: Addition of even integers
 * Write a program that adds all the even integers from 1 to 100 and prints the result.
 */

let result = 0;

for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    result += i;
  }
}

console.log(`The addition result is: ${result}`);