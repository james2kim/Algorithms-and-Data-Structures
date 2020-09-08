function sumSquareDifference(n) {
  let array = []
  let sumOfSquares = 0
  let sum = 0
  let squareOfSum = 0

for (let i = 1;i <= n; i++) {
  array.push (i)
}

for (let i = 0;i < array.length; i++) {
  sumOfSquares += (array[i] * array[i])
  sum += array [i]
  squareOfSum = sum * sum
}

let squareSumDifference = squareOfSum - sumOfSquares
return squareSumDifference
}

sumSquareDifference(10);
