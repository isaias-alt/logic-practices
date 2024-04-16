/**
 * Exercise 1: Addition of even integers
 * Write a program that adds all the even integers from 1 to 100 and prints the result.
 */

int sunEvenNumber() {
  int result = 0;

  for (int i = 2; i <= 100; i += 2) {
    result += i;
  }

  return result;
}

void main() {
  print('The addition result is: ${sunEvenNumber()}');
}
