/**
 * Exercise 4: Prime Numbers in a Range
 * Write a program that prompts the user for two positive integers n and m (where n < m) and then prints all prime numbers in the range n to m, 
 * including n and m if they are prime.
 */
import 'dart:io';
import 'dart:math' as Math;

bool isPrime(int num) {
  if (num <= 1) return false;
  if (num == 2) return false;
  if (num % 2 == 0) return false;

  for (int i = 3; i <= Math.sqrt(num).toInt(); i += 2) {
    if (num % i == 0) return false;
  }
  return true;
}

String printPrimeInARange(int n, int m) {
  if (n >= m) return 'Invalid input: n must be less than m.';
  if (n < 1 || m < 1) return 'Invalid Number. Please enter a positive integer.';

  List<int> res = [];

  for (int i = n; i <= m; i++) {
    if (isPrime(i)) {
      res.add(i);
    }
  }

  String result = '(${res.join(', ')})';
  return result;
}

void main() {
  stdout.write('Enter a positive integer n (where n < m): ');
  int n = int.parse(stdin.readLineSync()!);

  stdout.write('Enter a positive integer m (where n < m): ');
  int m = int.parse(stdin.readLineSync()!);

  print('Prime numbers in range $n to $m are: ');
  print(printPrimeInARange(n, m));
}
