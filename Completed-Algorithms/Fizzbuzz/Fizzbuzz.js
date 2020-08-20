function fizzBuzz() {
  let fizzArray = []
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzArray.push('FizzBuzz')
    } else if (i % 3 === 0) {
      fizzArray.push('Fizz')
    } else if (i % 5 === 0) {
      fizzArray.push('Buzz')
    } else {
      fizzArray.push(i)
    }
  }
  return fizzArray
}
fizzBuzz()
