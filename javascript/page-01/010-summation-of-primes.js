function sieveOfEratosthenes(max) {
  var list = Array(max + 1).fill(true)
  var current = 2
  var primes = []

  list[0] = list[1] = false

  while (current < max + 1) {
    if (list[current] == true) {
      for (var i = 2; current * i < max + 1; i++) {
        list[current*i] = false
      }
    }

    current++
  }

  for (var i = 2; i < list.length; i++) {
    if (list[i]) {
      primes.push(i)
    }
  }

  return primes
}

var primes = sieveOfEratosthenes(2000000)
var sum = 0

for (var i = 0; i < primes.length; i++) {
  sum += primes[i]
}

console.log(sum);
