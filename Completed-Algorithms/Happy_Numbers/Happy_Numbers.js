function happy(number) {
  let calculated = number
  let sumSquared = 0
  for (let i = 0 ; i < 5; i++) {
    const stringNum = calculated.toString().split('')
    for (let j = 0; j < stringNum.length; j++) {
      sumSquared += Math.pow(+ stringNum [j], 2)
    }
    if (sumSquared === 1) return true
    calculated = sumSquared
    sumSquared = 0
  }
  return false
}
happy(7)
