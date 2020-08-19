function LCM(A) {
  const largestNumberInArray = Math.max(...A)
  const deepcopy = [...A]
  let leastCommonMultiple = Math.max(...deepcopy)
  let isLeast = false 
  let trueCount = 0
  while (!isLeast) 
    {
      for (let i = 0;i<deepcopy.length;i++)
        {
          leastCommonMultiple % deepcopy[i] === 0 ? trueCount ++ : ""
        }

        if (trueCount === deepcopy.length) 
          {
             isLeast = true
          } 
        else 
          {
             leastCommonMultiple += largestNumberInArray
             trueCount = 0
          }
    }
  return leastCommonMultiple
}
LCM([3, 4, 5, 12, 40])
