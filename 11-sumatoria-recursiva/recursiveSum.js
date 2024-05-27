/**
 * Sumatoria recursiva
 * Escribe una función recursiva en JavaScript que reciba un número 𝑛 y devuelva la sumatoria de todos los números desde 1 hasta 𝑛. 
 * Por ejemplo, si la función recibe 5, debería devolver 15 (1 + 2 + 3 + 4 + 5). 
*/

const n = 5

function recursiveSum (n) {
  if (n <= 1) return n
  const sum = n + recursiveSum(n - 1)
  return sum
}

console.log(recursiveSum(n))