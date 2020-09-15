
function bubbleSort (array) {
  let swapC = 1;
  let swapCC = 0;
  
    while(swapC > 0) {
      swapCC = 0;
      for (let i = 0, n = array.length; i < n; i++) {
         if (array[i] > array[i+1]) {
           [array[i], array[i+1]] = [array[i+1], array[i]]
            swapCC++;
        }
    }
    swapC = swapCC;
  }
  return array
}

bubbleSort([6,5,4,3,2,1]);
