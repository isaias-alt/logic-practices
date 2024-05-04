/**
 * Suma de elementos
 * Escribe una función en JavaScript que reciba un array de números y devuelva la suma de todos los elementos.
*/

const array = [1, 2, 3, 4, 5]

function sumArray(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum
}

console.log(sumArray(array))