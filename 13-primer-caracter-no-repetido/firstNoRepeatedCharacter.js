/**
 * Encontrar el primer carácter no repetido
 * Escribe una función en JavaScript que reciba una cadena de texto y devuelva el primer carácter que no se repite. 
 * Por ejemplo, si recibe "swiss", debería devolver "w" ya que es el primer carácter que no se repite en la cadena. 
 * Sino debe devolver -1.
*/

function firstNoRepeatedCharacter (str) {
  const charCount = {}

  for (char of str) {
    charCount[char] = (charCount[char] || 0) + 1
  }

  for (let char of str) {
    if (charCount[char] === 1) return char
  }
  
  return -1
}


console.log(firstNoRepeatedCharacter('swiss'))