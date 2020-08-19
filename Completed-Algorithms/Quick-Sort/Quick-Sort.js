function swap (array,x,y) {
  let temp = array[x]
  array[x] = array[y]
  array[y] = temp
}

function pivot (arr, left = 0, right = arr.length-1) {
let shift = left

  for (let i = left + 1; i <=right;i++) {
    if (arr[i] < arr[left]) {
      swap(arr, i , shift)
    }
  }
  swap(arr,left,shift)
  return shift
}

function quickSort(array, left = 0, right = array.length-1) {
  if (left < right) {
    let index = pivot(array,left,right)
      quickSort(array,left, index -1)
      quickSort(array,index+1,right)
  }
  return array
}

quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])
