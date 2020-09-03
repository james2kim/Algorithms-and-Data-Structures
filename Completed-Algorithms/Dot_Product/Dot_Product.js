function dotProduct(ary1, ary2) {
  let array = []
  array.push(ary1,ary2)
  let dotProduct = 0
    for (let i = 0;i < array.length - 1; i++) {
      for (let j = 0;j<array[i].length; j++) {
        dotProduct += (array[i][j] * array[i+1][j])
      }
   }
  return dotProduct
  
}
dotProduct([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])
