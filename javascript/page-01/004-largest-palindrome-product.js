// A palindromic number reads the same both ways. The largest palindrome made from the product of
// two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

function checkPalindrome(number) {
  const string = String(number)

  for (var i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length -1 - i]) {
      return false
    }
  }

  return true
}

function foundLargestPalindrome() {
  let var1, var2
  let largest = 0

  for (var i = 999; i > 0; i--) {
    for (var j = 999; j >= i; j--) {
      if (largest > i * j) {
        continue
      }

      if (checkPalindrome(i * j)) {
        if (i * j > largest) {
          largest = i * j
        }
      }
    }
  }

  return largest
}

console.log(foundLargestPalindrome());
