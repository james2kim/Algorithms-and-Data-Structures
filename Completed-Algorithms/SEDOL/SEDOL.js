function sedol(input) {

  const modInput= input.toLowerCase()
  console.log(modInput)
  if (input.length<6 || input.length>6 || modInput.includes ('a','e','i','o','u')){
    return null
  }

  let sedolWeight = [1,3,1,7,3,9]  
  let checkSum=0
  for (let i = 0;i<sedolWeight.length;i++) {
    checkSum+=(sedolWeight[i] * parseInt(input[i]))
  }
  console.log(checkSum)

  const checkDigit = (10 - (checkSum % 10)) % 10
  console.log(checkDigit)

  return input.concat(checkDigit)

}
sedol('710889')
