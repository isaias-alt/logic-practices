/**
 * Ejercicio 1: Suma de enteros pares
 * Escribe un programa que sume todos los números enteros pares del 1 al 100 e imprima el resultado.
 */

function sumEvenNumbers() {
  let result = 0;

  for (let i = 2; i <= 100; i += 2) {
    result += i;
  }

  return result;
}

console.log(`El resultado de la adición es: ${sumEvenNumbers()}`);