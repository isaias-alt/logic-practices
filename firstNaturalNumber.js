/**
 * Escribe una función que reciba un número n y devuelva la suma de todos los números naturales desde 1 hasta n.
 * Por ejemplo, si n = 5, la función debe devolver 15 porque 1 + 2 + 3 + 4 + 5 = 15.
 *
 * Input: n = 5
 * Output: 15
 * Input: n = 10
 * Output: 55
 *
 * Requisitos:
 * - Debes usar un bucle para resolver el problema.
 * - La función debe manejar correctamente el caso cuando n es 0 o un número negativo (debería devolver 0 en esos casos).
*/

// mi solución
function sumOfFirstNaturalNumber(n) {
  if (n <= 0) return 0;

  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }

  return suma;
}

console.log(sumOfFirstNaturalNumber(10));

// solución simplificada:

// function sumOfFirstNaturalNumber(n) {
//   if (n <= 0) return 0;
//   return (n * (n + 1)) / 2;
// }

// console.log(sumOfFirstNaturalNumber(10)); // Output: 55
