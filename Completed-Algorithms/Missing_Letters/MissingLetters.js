function fearNotLetter(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let index = alphabet.indexOf(str[0])
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== alphabet[index]) {
      return alphabet[index]
    }
    index++
  }
}

fearNotLetter("stvwx")
