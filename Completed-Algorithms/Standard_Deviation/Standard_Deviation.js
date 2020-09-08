function standardDeviation(arr) {
  let sum = 0
  let sdSum = 0
  let varianceArray = []
  let average, variance
// Compute the Mathematical Average 
  for (let i = 0;i < arr.length; i++) {
    sum += arr[i]
    average = sum/arr.length
  }
  // Inside of the Variance Array, put the values of the dataset subtract the mathematical mean 
  for(let i = 0;i < arr.length; i++) {
    varianceArray.push((arr[i]-average)*(arr[i]-average))
  }
// To Calculate variance, we need to take the sum of the new values divided by number of values
  for (let i = 0;i < varianceArray.length; i++){
    sdSum += varianceArray[i]
    variance = sdSum / varianceArray.length
  }
// To calculate SD, square root the variance 
  const standardDeviation = Math.sqrt(variance)

// If the Standard Deviation is a whole number, we will return just the integer, otherwise, we will return the standard deviation to three decimal places 
  if (Number.isInteger(standardDeviation)) {
    return standardDeviation
  } else {
    return standardDeviation.toFixed(3)
  }  
}
standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])
