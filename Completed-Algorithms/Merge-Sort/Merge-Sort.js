// Function to sort two sorted arrays into one sorted array 
function merger (array1,array2) {
  let mergedArray = []
  let i = 0
  let j = 0

// This first loop checks for which item is greater in both sorted arrays, and it pushes the least greatest value and increments accordingly 
  while (i < array1.length && j < array2.length) {
    if (array1[i] > array2[j]) {
      mergedArray.push(array2[j])
      j++
    } else {
      mergedArray.push(array1[i])
      i++
    }
  }

  // The residual items of array1 can now be added into mergedArray without concern of if it will be greater or less than the value in array2. This is because if array2 had items that were of less value, they were already pushed into the array in the while loop. 
  for (i; i < array1.length;i++) {
    mergedArray.push(array1[i])
  }
// same goes for the third loop below. 
  for(j; j < array2.length;j++) {
    mergedArray.push(array2[j])
  }

  return mergedArray
}

function mergeSort(array) {
  // change code below this line

  // In a recursive function, we need a terminating conditional check. In this one, if the array length = 1 we are going to return the individual value, in each little array. 
  if (array.length === 1) {
    return array
  }

  // We will find the middle index
  let middle = Math.floor(array.length/2)

  // after the array has been recursively winded down to little arrays of length ===1, the call stack will begin to sort and merge these little arrays 
  let leftSide = mergeSort(array.slice(0,middle))
  let rightSide = mergeSort(array.slice(middle))
  return merger(leftSide,rightSide);
}

mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

