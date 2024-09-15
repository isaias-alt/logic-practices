/**
 * Escribe una función llamada reverseString que reciba una cadena de texto como argumento y devuelva la misma cadena pero invertida.
 * 
 * Input: "hello"
 * Output: "olleh"
 * Input: "world"
 * Output: "dlrow"
 * 
 * Requisitos:
 * - No puedes usar funciones integradas como reverse() (si estás en JavaScript o un lenguaje similar que tenga una función así).
 * - Debes implementar la lógica de reversión manualmente.
 * - La función debe manejar correctamente una cadena vacía (devolver una cadena vacía).
*/

// mi solución
function reverseString (string) {
  if (string.length === 0) return ''
  let reversedString = ''
  
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i]
  }
  
  return reversedString
}

const string = 'hello'
console.log(reverseString(string))

// solución simplificada:

// function reverseString(string) {
//   if (string === '') return '';
//   let reversedArray = [];
//   for (let i = string.length - 1; i >= 0; i--) {
//     reversedArray.push(string[i]);
//   }
//   return reversedArray.join('');
// }
// const string = "hello";
// console.log(reverseString(string)); // Output: "olleh"
