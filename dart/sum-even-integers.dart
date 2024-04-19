/**
 * Ejercicio 1: Suma de enteros pares
 * Escribe un programa que sume todos los números enteros pares del 1 al 100 e imprima el resultado.
 */

int sunEvenNumber() {
  int result = 0;

  for (int i = 2; i <= 100; i += 2) {
    result += i;
  }

  return result;
}

void main() {
  print('El resultado de la adición es: ${sunEvenNumber()}');
}
