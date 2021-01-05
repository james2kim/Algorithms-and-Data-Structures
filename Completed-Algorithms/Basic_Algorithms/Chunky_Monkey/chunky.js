function chunkArrayInGroups(arr, size) {
let counter = size
let temp = []
let newArray= []
  for (let i = 0 ; i < arr.length; i++) {
    counter --
    temp.push(arr[i])
    if (counter === 0 || i === arr.length -1) {
      newArray.push(temp)
      temp = []
      counter = size
    }
  }
  return newArray
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)
