function IBeforeExceptC(word) {
  let firstIndex = 0
  for (let i = 0;i < word.length; i++) {
    if (word[i] === 'c' && word[i+1] === ('e'||'i')) {
      firstIndex = i
    }
  }
  let subPhrase = word.slice (firstIndex, firstIndex + 3)
  
  return subPhrase==="cei"? true:false
  
}
IBeforeExceptC("receive")
