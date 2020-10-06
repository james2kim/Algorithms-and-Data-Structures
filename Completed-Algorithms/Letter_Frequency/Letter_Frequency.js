function letterFrequency(txt) {
  const array = txt.split('')
  const unique = [...new Set(array)].sort()
  let letterFrequency = []
  for (let i = 0; i < unique.length; i++) {
     const count = array.filter(item => item == unique[i]).length
     letterFrequency.push([unique[i], count])
  }
  return letterFrequency
}
letterFrequency("Not all that Mrs. Bennet, however")
