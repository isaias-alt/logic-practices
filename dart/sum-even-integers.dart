/**
 * Exercise 1: Addition of even integers
 * Write a program that adds all the even integers from 1 to 100 and prints the result.
 */

void main() {
  int result = 0;
  for (int i = 0; i < 100; i++) {
    if (i % 2 == 0) {
      result += i;
    }
  }
  print('The addition result is: $result');
}
