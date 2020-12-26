function selectionSort(array) {
    let index = 0

    for (let i = 0; i < array.length; i++) {
        let lowest = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[lowest]) {
                lowest = j 
            }
        }
            [array[i], array[lowest]] = [array[lowest], array[i]]
    }
    return array
}
selectionSort([6,5,4,3,2,1])
