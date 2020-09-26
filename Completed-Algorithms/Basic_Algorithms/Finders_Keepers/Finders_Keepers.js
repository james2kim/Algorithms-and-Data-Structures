function findElement(arr, func) {
  for (let i = 0 ; i < arr.length; i++) {
    let isTrue = func(arr[i])
    if (isTrue) return arr[i]
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
