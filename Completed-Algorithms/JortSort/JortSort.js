function jortsort(array) {
  let initialArray = [...array]
  let sorted = array.sort((a,b) => {return a - b})
  let boolean = true
  for(let i = 0;i < sorted.length; i++) {
    if (initialArray[i] !== sorted[i]) {
      boolean = false 
      break
    }
  }
  return boolean 
}
jortsort([1,2,13,4,5])
