// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is
// 13.
//
// What is the 10 001st prime number?

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false
    }
  }

  return true
}

function nextPrime(start) {
  let number = start + 2

  while (true) {
    if (isPrime(number)) {
      return number
    }

    number += 2
  }
}

let prime = 3

for (var i = 2; i < 10001; i++) {
  prime = nextPrime(prime)
}

console.log(prime);
