/**
 * Ordenamiento de un array
 * Escribe una función en JavaScript que reciba un array de números y devuelva un nuevo array con los elementos ordenados de menor a mayor. 
 * Puedes utilizar cualquier algoritmo de ordenamiento que prefieras, como el algoritmo de burbuja, el de inserción, el de selección o incluso 
 * los métodos integrados en JavaScript como Array.sort().
 */

let array = [73, 15, 62, 42, 88, 7, 96, 51] // [7, 15, 42, 51, 62, 73, 88, 96]

function arraySortener(array) {
  return array.sort((a, b) => a - b)
}

console.log(arraySortener(array))