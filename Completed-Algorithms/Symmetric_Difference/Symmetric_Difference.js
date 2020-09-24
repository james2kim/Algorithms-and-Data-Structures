function symmetricDifference(A, B) {
  // Filter the first and second array and only return unique values
  const newFirst = A.filter(value => !B.includes(value) ? value : '')
  const newSecond = B.filter(value =>!A.includes(value) ? value : '')
  
  // Combine new filtered arrays into new array and sort it
  const symmetricDifference = [...newFirst, ...newSecond].sort()
  return symmetricDifference
}

symmetricDifference(["John", "Bob", "Mary", "Serena"], ["Jim", "Mary", "John", "Bob"])
