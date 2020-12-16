function binarySearch (sortedArray, value) {
    let leftPointer = 0
    let rightPointer = sortedArray.length - 1
    let middle = Math.floor((start + end) / 2)

    while(sortedArray[middle] !== value && start <= end) {
        if (value < sortedArray[middle]) {
            rightPointer = middle -1
        } else {
            leftPointer = middle + 1
        }
        middle = Math.floor((start + end) / 2)
    }
    if (array[middle] === value) {
        return middle
    } 
        return - 1
}
