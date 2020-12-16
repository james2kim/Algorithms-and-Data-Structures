function binarySearch (sortedArray, value) {
    let start= 0
    let end = sortedArray.length - 1
    let middle = Math.floor((start + end) / 2)

    while(sortedArray[middle] !== value && start <= end) {
        if (value < sortedArray[middle]) {
            end = middle -1
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2)
    }
    if (sortedArray[middle] === value) {
        return middle
    } 
        return - 1
}
