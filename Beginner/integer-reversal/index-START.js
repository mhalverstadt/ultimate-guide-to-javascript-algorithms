// Given an integer, return an integer that has the reverse ordering of that which was received. E.g



// Reverses a string
function reverseString(text) {
  return [...text].reduce((acc, char) => char + acc, '')
}

// Reverses an integer
function reverseInteger(num) {
  let reversedNumber = parseInt(reverseString(num.toString()))

  return (reversedNumber * Math.sign(num))
}