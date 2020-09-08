function selectionSort(array){
  const length = array.length
  let innerIndex = 0
  for (let i = 0; i < length; i++) {
    for (let j = innerIndex; j < array.length; j++) {
      if (array [j] < array [i]) {
       const temp = array[i];
       array[i] = array[j];
       array[j] = temp;
     }
    }
    innerIndex++
  }
  return array
}
selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])
