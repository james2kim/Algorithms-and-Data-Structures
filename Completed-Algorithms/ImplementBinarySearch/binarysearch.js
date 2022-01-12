const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 49, 70
]

function binarySearch(searchList, value) {
  let arrayPath = [];
  let newSearchList = [...searchList];
  let middle;
  let index;
  while (middle !== value) {
    if(middle > value) {
      newSearchList = newSearchList.slice(0, index)
    } 
    else if (middle < value) {
      newSearchList = newSearchList.slice(index + 1)
  }
    middle = newSearchList[Math.floor((newSearchList.length - 1) / 2)];
    index = newSearchList.indexOf(middle);
    arrayPath.push(middle);
  if (newSearchList.length === 0) break;
}
  if(newSearchList.length === 0) {
    return "Value Not Found"
  } 
  return arrayPath;
}

binarySearch(testArray, 6)
