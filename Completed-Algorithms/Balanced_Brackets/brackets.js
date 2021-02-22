function isBalanced(str) {
  let counter = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '[') counter++
    if (str[i] === ']')  {
      if (counter <=0 ) return false 
      counter --
    }
  }
  return true
}
