/**
 * Comprobar si un número es primo
 * Escribe una función en JavaScript que reciba un número y determine si es un número primo o no. 
 * Un número primo es aquel que solo es divisible por sí mismo y por 1, es decir, que no tiene divisores aparte de estos dos.
 * La función debería devolver un valor booleano: true si el número es primo y false si no lo es.
*/

let number = 31

function isPrimeNumber(number) {
  if (number <= 1) return false

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false
  }

  return true
}

console.log(isPrimeNumber(number))