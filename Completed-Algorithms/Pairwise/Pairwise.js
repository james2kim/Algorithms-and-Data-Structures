function pairwise(arr, arg) {
  let increment = 0
  let sum = 0
  let length = arr.length
    while (increment < length) {
      for (let i = increment + 1; i < length; i++) {
          if(arr[increment] + arr[i] === arg){
            sum += increment
            sum += i
            arr[increment] = undefined
            arr[i] = undefined
          } 
        }
      increment++
    }
  return sum
}

pairwise([1, 3, 2, 4], 4)
