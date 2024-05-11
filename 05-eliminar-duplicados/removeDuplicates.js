/**
 * Eliminación de duplicados
 * Escribe una función en JavaScript que reciba un array y devuelva un nuevo array eliminando los elementos duplicados. 
 * El nuevo array debe contener solo una instancia de cada elemento único del array original, manteniendo el orden original de los elementos.
*/

const array = [1, 1, 2, 3, 4, 5, 5, 6, 7, 7, 5, 8]

function removeDuplicates(array) {
  const set = new Set(array)
  return newArray = Array.from(set)
}

console.log(removeDuplicates(array))