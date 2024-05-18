/**
 * FizzBuzz
 * Escribe una función en JavaScript que imprima los números del 1 al 100.
 * Pero para múltiplos de tres, imprime "Fizz" en lugar del número, y para los múltiplos de cinco, imprime "Buzz".
 * Para números que son múltiplos de ambos tres y cinco, imprime "FizzBuzz".
 */

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

console.log(fizzBuzz());
