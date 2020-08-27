function loopSimult(array) {
  let newArray = []
  let string = ''
  let placement=0
  let index = array[0].length
    while (index > 0)
      {
          for (let i = 0;i < array.length; i++) {
            string += array[i][placement]
          } 
        newArray.push(string)
        index--
        placement++
        string = ''
      }

  return newArray
}

loopSimult([["a", "b", "c", "d"], ["A", "B", "C", "d"], [1, 2, 3, 4]])
