// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without
// any remainder.
//
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const NUMBER = 20

let result = NUMBER
let i

while (true) {
  for (i = 2; i <= NUMBER; i++) {
    if (result % i != 0) {
      break
    }
  }

  if (i == NUMBER + 1) {
    break
  }

  result += NUMBER
}

console.log(result);
