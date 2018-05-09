// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

const INPUT = 600851475143
let temp = INPUT

while (temp % 2 == 0) {
  temp = temp / 2
}

for (var i = 3; i < Math.sqrt(temp); i++) {
  while (temp % i == 0 ) {
    temp = temp / i
  }
}

console.log(temp);
