/**
 * Búsqueda binaria
 * Escribe una función en JavaScript que implemente el algoritmo de búsqueda binaria en un array ordenado de números. 
 * La función debe recibir dos argumentos: el array y el valor a buscar. 
 * Debe devolver el índice del valor en el array si se encuentra, o -1 si el valor no está presente. 
*/

function binarySearch (array, value) {
  let left = 0
  let right = array.length - 1
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    if (array[middle] === value) return middle
    if (array[middle] < value) left = middle + 1
    else right = middle - 1
  }
  return -1
}

const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
const value = 13

console.log(binarySearch(array, value))