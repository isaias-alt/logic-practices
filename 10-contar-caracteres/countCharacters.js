/**
 * Contar caracteres en una cadena
 * Escribe una función en JavaScript que reciba una cadena de texto y devuelva un objeto con la cuenta de cada carácter en la cadena.
 * Por ejemplo, si la función recibe "hello", debería devolver { h: 1, e: 1, l: 2, o: 1 }.
 */

const text = "hello";

function countCharacters(text) {
  const charCount = {};

  for (char of text) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  return charCount;
}

console.log(countCharacters(text));
