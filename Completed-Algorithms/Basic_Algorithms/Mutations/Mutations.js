function mutation(arr) {
  const lowerCase = arr.join(' ').toLowerCase().split(' ')
  const char1 = lowerCase[0].split('')
  const char2 = lowerCase[1].split('')
  for (let i = 0 ; i < char2.length; i++) {
    if (!char1.includes(char2[i])) return false 
  }
  return true
}

mutation(["Mary", "Army"])
