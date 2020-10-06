function entropy(s) {
// Split the string into an array
  const array = s.split('')

// Create a new array with unique values
  const unique = [...new Set(array)]

// Total number of characters
  const N = s.length
  let entropy = 0

// In Shannon entropy, We must multiply the probability of each char with  the Log base 2 of it and take the negative value 
  for (let i = 0; i < unique.length;i++) {
    const count = array.filter(item => item == unique[i]).length
    entropy += (count / N) * Math.log2(count/N)* -1
  }
  return entropy

}
entropy("1223334444")
