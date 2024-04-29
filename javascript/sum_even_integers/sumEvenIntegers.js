function sumEvenNumbers() {
  let result = 0;

  for (let i = 2; i <= 100; i += 2) {
    result += i;
  }

  return result;
}

console.log(`The addition result is: ${sumEvenNumbers()}`);