function symmetricDifference(A, B) {
  // Filter the first and second array and only return unique values
    const filterFunc = (filteringArray, comparisonArray) => {
     return filteringArray.filter
      (value =>!comparisonArray.includes (value))
    }
    const filteredA = filterFunc(A, B)
    const filteredB = filterFunc(B, A)
  
  // Combine new filtered arrays into new array and sort it
  const symmetricDifference = [...newFirst, ...newSecond].sort()
  return symmetricDifference
}

symmetricDifference(["John", "Bob", "Mary", "Serena"], ["Jim", "Mary", "John", "Bob"])
