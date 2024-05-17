/**
 * Generar números de Fibonacci
 * Escribe una función en JavaScript que genere los primeros n números de la secuencia de Fibonacci.
 * La secuencia de Fibonacci es una serie de números en la que cada número es la suma de los dos anteriores, comenzando con 0 y 1.
 * Por ejemplo, los primeros 8 números de Fibonacci son 0, 1, 1, 2, 3, 5, 8, 13.
 */

function generateFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  const fibonacci = [0, 1];
  for (let i = 2; i < n; i++) {
    const newNumber = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(newNumber);
  }
  return fibonacci;
}

console.log(generateFibonacci(8));
