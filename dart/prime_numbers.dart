/**
 * Exercise 2: Prime numbers
 * Write a program that prompts the user for a positive integer greater than 1 and determines whether that number is prime or not. 
 * A prime number is one that is only divisible by 1 and itself.
 */
import 'dart:io';
import 'dart:math' as Math;

bool isPrime(int num) {
  if (num <= 1) {
    return false;
  }

  for (int i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}

void main() {
  stdout.write('Enter a number to check if it is prime or not: ');
  int num = int.parse(stdin.readLineSync()!);

  if (isPrime(num)) {
    print('$num is prime.');
  } else {
    print('$num is not prime.');
  }
}
