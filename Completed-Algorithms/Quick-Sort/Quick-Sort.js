const swap = (arr, x, y) => [arr[x], arr[y]] = [arr[y], arr[x]]

function pivot (arr, start = 0, end = arr.length - 1) {
  let index = start
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < arr[start]) swap(arr, i, index)
  }
  swap(arr, start, index)
  return index
}

function quickSort(arr, left = 0,  right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right)
    quickSort(arr, left, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}
quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])
