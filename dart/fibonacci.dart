/**
 * Exercise 3: Fibonacci Numbers
 * Write a program that prompts the user for a positive integer and then prints the first n terms of the Fibonacci sequence, 
 * where n is the number entered by the user. The Fibonacci sequence starts with 0 and 1, and each next term is the sum of the previous two 
 * (0, 1, 1, 2, 3, 5, 8, ...).
 */
import 'dart:io';

List<int> fibonacci(int num) {
  if (num <= 0) {
    print('Please enter a positive integer');
    return [];
  }

  if (num == 1) return [0];

  List<int> res = [0, 1];

  while (res.length < num) {
    int nextFib = res.last + res[res.length - 2];
    res.add(nextFib);
  }

  return res;
}

void main() {
  stdout.write('Enter a number: ');
  int num = int.parse(stdin.readLineSync()!);

  List<int> fibonacciSequence = fibonacci(num);

  if (fibonacciSequence.isNotEmpty) {
    print(fibonacci(num).toString().replaceAll('[', '(').replaceAll(']', ')'));
  }
}
