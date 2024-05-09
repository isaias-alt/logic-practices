/**
 * Encontrar el número mayor y menor
 * Escribe una función en JavaScript que reciba un array de números y devuelva un objeto con dos propiedades: 
 * max que represente el número mayor del array y min que represente el número menor del array.
*/

let array = [73, 15, 62, 42, 88, 7, 96, 51] // -> {min: 7, max: 96}

function findMaxMin(array) {
  let min = array.reduce((a, b) => Math.min(a, b))
  let max = array.reduce((a, b) => Math.max(a, b))
  return { min, max }
}

console.log(findMaxMIn(array))