function split(str) {
  const finalArr = []
  let distinctChar = str[0];
  let strSeq = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== distinctChar) {
      finalArr.push(strSeq);
      strSeq = '';
      distinctChar = str[i]
    } 
  strSeq+=str[i]
  }
  if (strSeq.length > 0) {
    finalArr.push(strSeq)
  }
  return finalArr
}
split("hello")
