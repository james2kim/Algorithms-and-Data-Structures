function rot13(str) { // LBH QVQ VG!
  let charArray = []
  let regEx = /[A-Z]/
  str = str.split("")

  for (let x in str) {
    if(regEx.test(str[x])){
      charArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65)
    } else {
      charArray.push(str[x].charCodeAt())
    }
  }
  str = String.fromCharCode.apply(String,charArray);
  return str
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
