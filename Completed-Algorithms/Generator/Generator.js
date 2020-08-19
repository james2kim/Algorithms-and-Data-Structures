function exponentialGenerator(n) {
    let count = 0
    let generatorNum = 2
  
    while (count < n) 
      {
        let squared = Math.pow(generatorNum,2)
    
        if (Number.isInteger(Math.cbrt(squared))) {
          generatorNum ++
        } else {
            count++
            count !== n ? generatorNum ++ : ""
        }
      }
    return Math.pow(generatorNum, 2)
  }
  exponentialGenerator(10)
