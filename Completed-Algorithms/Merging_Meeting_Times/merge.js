function mergeRanges(arr) {

    let newArr = arr.sort((a,b) => {
        return a.startTime - b.startTime
    })
    let finalArray = []
    let startTime = newArr[0].startTime
    let endTime = newArr[0].endTime
    for (let i = 0; i < newArr.length - 1; i++) {
        if (newArr[i].endTime < newArr[i + 1].startTime) {
            finalArray.push({startTime, endTime})
            startTime = newArr[i +1].startTime
        } 
            endTime = newArr[i + 1].endTime
        
        if (i === newArr.length - 2) finalArray.push({startTime, endTime})
        
    }

    return finalArray

}

mergeRanges(  [
    { startTime: 0,  endTime: 1 },
    { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9,  endTime: 10 },
  ])
