/** 
 * Dada una secuencia de números enteros del 1 al n, donde falta un número. 
 * Escribe una función llamada findMissingNumber que encuentre y devuelva el número faltante. 
 * La secuencia está desordenada, y no puede haber números repetidos.
 * 
 * Input: [3, 7, 1, 2, 8, 4, 5]
 * Output: 6 (falta el número 6 en la secuencia del 1 al 8)
 * Input: [1, 2, 4, 5, 6]
 * Output: 3 (falta el número 3 en la secuencia del 1 al 6)
 * 
 * Requisitos:
 * - La función debe recibir un array de números enteros desordenados y encontrar el número faltante en la secuencia del 1 al n.
 * - El array contiene exactamente n-1 números.
 * - Trata de pensar en la eficiencia de tu solución, especialmente para arrays grandes.
*/

function findMissingNumber(array) {
  const n = array.length + 1;
  const totalSum = ( n * ( n + 1 ) ) / 2;
  const currentSum = array.reduce((acc, curr) => acc + curr, 0);
  const result = totalSum - currentSum;
  return result;
}

const array = [3, 7, 1, 2, 8, 4, 5];
console.log(findMissingNumber(array));