function dropElements(arr, func) {
let filtered;

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
     filtered = arr.slice(i, arr.length)
     break
    }
  }
  
  return filtered ? filtered: []
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;})
