/**
 * Comprobar palíndromos
 * Escribe una función en JavaScript que reciba una cadena de texto y determine si es un palíndromo o no. 
 * Un palíndromo es una palabra, frase o secuencia que se lee igual en ambos sentidos (de izquierda a derecha y de derecha a izquierda), 
 * ignorando los espacios, signos de puntuación y mayúsculas/minúsculas.
*/

let text = 'Isaac no ronca asi'

function checkPalindrome(text) {
  let newText = text.toLowerCase().replaceAll(' ', '')
  let reversedText = newText.split('').reverse().join('')
  return newText === reversedText
}

console.log(checkPalindrome(text))