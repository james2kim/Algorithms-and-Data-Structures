const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];

function binarySearch(searchList, value) {
const arrPath = []
const divide = (arr) => {
  const middle = Math.floor((arr.length - 1) /2)
  arrPath.push(arr[middle])
  if(arr[middle] === value) {
    return
  } else if (arr[middle] < value) {
    divide(arr.slice(middle + 1))
  } else if (arr[middle] > value) {
    divide(arr.slice(0, middle))
  }
}

divide(searchList)
if(arrPath[arrPath.length - 1] === undefined) {
  return 'Value Not Found'
}
return arrPath
}

binarySearch(testArray, 6)
