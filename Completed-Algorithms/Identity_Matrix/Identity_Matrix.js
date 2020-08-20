function idMatrix(n) {
 let matrix = []
 let count = 0;
  for (let i = 0;i < n; i++) {
   let temp = []
    for (let j = 0;j < n; j++) {
      if (j === count) {
        temp.push(1)
      } else{
        temp.push(0)
     }
   }
   matrix.push(temp)
   count++
 }
  return matrix
}
idMatrix(3)
