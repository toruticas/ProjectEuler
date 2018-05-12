// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//
// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

function findTheProductOfTriplet(number) {
  var limit = Math.floor(number / 2)

  for (var a = limit - 2; a > 0 ; a--) {
    for (var b = limit - 1; b > a; b--) {
      for(var c = limit; c > b; c--) {
        if (a*a + b*b == c*c) {
          if (a + b + c === number) {
            // return { a, b, c }
            return a * b * c
          }
        }
      }
    }
  }
  //
  // throw new Error("Pythagorean triplet not found")
}

console.log(findTheProductOfTriplet(1000));
