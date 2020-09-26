function findLongestWordLength(str) {
  const split = str.split(' ')
  let longestWord = ''
  split.forEach(word => 
  word.length > longestWord.length ? 
  longestWord = word : '')
  return longestWord.length
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
