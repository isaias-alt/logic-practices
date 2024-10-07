/**   
 * Dado un array de números enteros (positivos, negativos o cero).
 * Encuentra el subarray contiguo (que contiene al menos un número) con la suma máxima posible y devuelve esa suma.
 * 
 * Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 * Output: 6 (el subarray con la suma máxima es [4, -1, 2, 1])
 * Input: [1]
 * Output: 1 (el subarray con la suma máxima es [1])
 * 
 * Requisitos:
 * - Debes devolver la suma máxima del subarray.
 * - Intenta hacer esto de manera eficiente.
*/

function maxSubarraySum(arr) {
  let maxSoFar = arr[0]
  let currentMax = arr[0]

  for (let i = 1; i < arr.length; i++) {
    currentMax = Math.max(arr[i], arr[i] + currentMax)
    maxSoFar = Math.max(maxSoFar, currentMax)
  }

  return maxSoFar
}

const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubarraySum(array))