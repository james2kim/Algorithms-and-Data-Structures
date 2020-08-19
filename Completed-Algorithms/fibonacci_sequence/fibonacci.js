function fibonacci(n) {

  //The first two numbers of the sequence are always 0,1 
const fibonacciSequence = [0,1]

// we need to loop as many time as the fibonacci sequence n input - the existing sequence values in array
  for (let i = 0; i < n - 1; i++) {
  // the algorithm for calculating next fibonacci is just the two previous numbers added 
    fibonacciSequence.push (fibonacciSequence [fibonacciSequence.length - 1]+       fibonacciSequence [fibonacciSequence.length - 2])
  }
  // we will return the last value in array
  return fibonacciSequence[fibonacciSequence.length-1]
}

fibonacci(2)
