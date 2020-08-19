function isHarshadOrNiven() {
  const res = {
    firstTwenty: [],
    firstOver1000: undefined
  };
  // Change after this line

// Because we are doing the similar operation but for a wide range of data on two problems, better than looping through 1-1000+, we can create a helper function to calculate harshad numbers given certain parameters, that way, we can create a function to calculate harshad numbers in any situation while also solving our problem. Our function handles both returning an array of harshad numbers, or returning 1 harshad value 
  const calculateHarshad  = (startNum, maxCountLength, needArray) => {
    // Depending on the truthy value of the third parameter passed, we will need to return either an array or a number
      let harshad
      needArray ? harshad = [] : harshad = 0
      let isNotFull = true
      let start = startNum
      let sum = 0
        
        while (isNotFull) {
          // Turn number into string, split it, and add the parseInt value to temporary sum variable 
          const stringNum = start.toString().split('')
    
          for (let num of stringNum) {
            sum+=parseInt(num)
          }
    
           // Harshad definition
            if (start % sum === 0) {
              needArray ? harshad.push(start) :harshad = start
            }
// Checks to see if our function parameter conditions are met, if so, we change the boolean value to false to break out of the loop 
            if (harshad.length === maxCountLength || (harshad > 0 && !needArray)) {
              isNotFull = false 
            } 
          start++
          sum = 0
      }
      return harshad
  }

// function inputs to calculate first twenty Harshad numbers
  const firstTwenty = calculateHarshad(1,20,true)
  res.firstTwenty = [...firstTwenty]

// function inputs to calculate first harshad number > 1000
  res.firstOver1000 = calculateHarshad (1001,1,false)

  return res;
}
isHarshadOrNiven()
