function operation(op, arr1, arr2) {

  let newElem = []
// We will have a nested loop, and conduct a different operation based on the op parameter
  for (let i = 0; i < arr1.length; i++) {

    let temp = []

    for (let j = 0; j < arr1[i].length; j++) {
      if (op === 'm_add') 
        {
          temp.push(arr1[i][j] + arr2[i][j])
        } 
      else if (op === 's_add') 
        {
            return [
              [arr1[i][j] + arr1[i][j+1], arr1[i][j] + arr1[1][0]], 
              [arr1[i][j+1] + arr1[i+1][j], arr1[i][j+1] + arr1[i+1][j+1]]
            ]
        } 
      else if (op === 'm_sub') 
        {
            temp.push(arr1[i][j]-arr2[i][j])
        } 
      else if (op === 'm_mult') 
        {
            temp.push(arr1[i][j] * arr2[i][j])
        } 
      else if (op === 'm_div') 
        {
            temp.push(arr1[i][j] / arr2[i][j])
        } 
      else if (op === 'm_exp') 
        {
            temp.push(Math.pow(arr1[i][j], arr2[i][j] ))
        } 
      else 
        {
            return 'Please Use a Proper Operation'
        }
    }
    newElem.push(temp)
  }

  return newElem
}
operation("m_exp",[[1,2],[3,4]],[[1,2],[3,4]])
