function iteratedSquare(n) {

  function numToString (number) {
    return number.toString().split('')
  }

  let numString = numToString (n)
  let result = 0

  while (true) {
    for (let i = 0; i < numString.length;i++) {
    result += Math.pow (parseInt (numString [i]), 2)
  }
  if (result === 1 || result === 89) {
    return result
  }
  
  numString.length = 0
  numString = numToString (result)
  result = 0
 }
}
iteratedSquare(4)
