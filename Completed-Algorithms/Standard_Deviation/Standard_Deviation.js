function standardDeviation(arr) {
  let sum = 0
  let variance = 0
  // 1st calculate the average of dataset
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  const average = sum / arr.length
  // 2nd: subtract each value of dataset with the average and square it
  // 3rd. we will sum all values in section 2, and we will divide it by number of items in arr => known as variance of dataset
  for (let i = 0; i < arr.length; i++) {
    variance += Math.pow(arr[i] - average, 2)
  }
  variance = variance / arr.length

  // 4th: calculate standard deviation which is square root of variance 
  const standardDeviation = Math.sqrt(variance)
  
  // Fix Decimal points to three for floating point numbers 
  if (Number.isInteger(standardDeviation)) {
    return standardDeviation
  } else {
    return standardDeviation.toFixed(3)
  }

}
standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])
