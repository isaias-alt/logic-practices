/**
 * Escribe una función que reciba un número entero n y determine si es un número primo o no. 
 * Un número primo es un número mayor que 1 que no tiene divisores más que 1 y él mismo.
 * 
 * Input: n = 7O
 * Output: true (7 es un número primo)
 * Input: n = 10
 * Output: false (10 no es un número primo porque 2 y 5 son divisores de 10)
 * 
 * Requisitos:
 * - La función debe devolver true si el número es primo y false si no lo es.
 * - Debe manejar correctamente casos donde n sea menor o igual a 1 (en estos casos, la función debe devolver false).
*/

function isPrimeNumber (n) {
  if (n <= 1) return false
  if (n % 2 === 0) return false
  
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false
  }
  
  if (n === 2) return true
  
  return true
}

console.log(isPrimeNumber(6))
console.log(isPrimeNumber(7))