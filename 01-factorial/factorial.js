/** Factorial de un número
 * Escribe una función en JavaScript que calcule el factorial de un número dado. El factorial de un número 𝑛 (representado como n!)
 * es el producto de todos los enteros positivos menores o iguales a n. 
 * Por ejemplo, el factorial de 5 (5!) es igual a 5×4×3×2×1=120
*/

function factorial(n) {
  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }
  return result
}

console.log(factorial(5))