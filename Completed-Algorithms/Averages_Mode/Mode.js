function mode(arr) {
  // Get unique arrays, 1 sorted, and 1 filtered to easily compare values 
  let sorted = arr.sort((a,b) => {return a - b})
  let unique = [...new Set(sorted)]
  // Initialize variables 
  let modeValue = [];
  let counter = 0;
  let tempCounter = 0;

  // Loop through the set and the sorted array
  for (let i = 0;i < unique.length; i++) {
    for (let j = 0;j < sorted.length; j++) {
      // if the value of the sorted array==a unique value, increment temp count
      sorted[j] === unique[i] ? tempCounter++ : ""
    }
    // if the tempCount is greater than counter, than that is the new mode
    if (tempCounter > counter) {
      counter = tempCounter
      modeValue.length = 0
      modeValue.push (unique[i])
    } 
    if(tempCounter === counter ) {
      modeValue.push(unique[i])
    }
    tempCounter = 0
  }
  
  return [... new Set(modeValue)]
}
mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17])
