/**
 * Invertir una cadena
 * Escribe una función en JavaScript que reciba una cadena de texto y devuelva una nueva cadena con los caracteres en orden inverso.
 * Por ejemplo, si la función recibe "hello", debería devolver "olleh".
 */

const text = "hello";

function reversedText(text) {
  const reversedText = text.split("").reverse().join("");
  return reversedText;
}

console.log(reversedText(text));
