function isValid(iban) {

// If the Iban length is more than 34, it is invalid
  if (iban.length > 34) {
    return false 
  }
// If the string contains a decimal value, it is invalid
  if (iban.includes('.')) {
    return false 
  }

  // Generate an array of A=10 ....Z=35
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let numCode = []
  for (let i = 0;i < alphabet.length; i++) {
   numCode.push ([alphabet [i], (i + 10).toString ()])
  }

  // Helper Function to convert Letters to Numbers

  function convertLetters (ibanSubArray) {
    for (let i = 0;i < ibanSubArray.length; i++) {
      for (let j = 0;j < numCode.length; j++) {
        if (ibanSubArray [i] === numCode [j][0]) {
            ibanSubArray [i] = numCode [j][1]
        }
      }
  }
  return ibanSubArray
}

  // Remove all white spaces, and the first 4 digits of string, add to end of string
  let fourInitial = iban.slice (0, 4)
  let IBAN = iban.replace (fourInitial, "")
  .replace(/\s+/g, '')
  .concat(fourInitial)

// Helper function to check to see if character is letter
function isLetter(str) {
  return str.length === 1 && str.match(/[A-Z]/i);
}

// The second part consists of 14 numerical characters, before a letter
let secondPart = []
let secondEndIndex = 0
for (let i = 4;i < IBAN.length; i++) {
  //if the character is a letter, then this is the end of the second section 
  if (isLetter(IBAN [i])) {
    secondEndIndex = i
    break
  }
  // push numbers into second array 
  secondPart.push(IBAN [i])
}

// Initialize the first part of the IBAN series 
let firstPart = IBAN.slice(0,4).split('')

// If the second part has more than 14 characters, we need to push the excess values to the first part, and also remove those characters from the second part
let count = 0
if(secondPart.length > 14) {
  for(let i = 14;i < secondPart.length; i++){
    firstPart.push(secondPart [i - 14])
   count ++
  }
  secondPart.splice (0,2)
}

// Initalize the iban sub arrays with properly distributed alphanumeric codes 
let ibanSubArrays = [firstPart, secondPart, IBAN.slice(secondEndIndex,secondEndIndex + 2).split(''), IBAN.slice(secondEndIndex + 2, IBAN.length).split('')]


// Convert Letters to number value 10-35

for (let i = 0;i < ibanSubArrays.length;i++) {
  convertLetters(ibanSubArrays [i])
}

// initialize seperate variables for the four sections of IBAN
let [first, second, third, fourth] = [...ibanSubArrays]
first = first.join('')
second = second.join('')
third = third.join('')
fourth = fourth.join('')

// Initialize Modulo Variables to 0
let firstModulo, secondModulo, thirdModulo, mod97Operation
firstModulo = secondModulo = thirdModulo = mod97Operation = 0
  

// Algorithm=> first section%97=value => value.concat(second section) repeat 
  firstModulo = (parseInt(first) % 97).toString().concat (second)
  secondModulo = parseInt((firstModulo % 97).toString().concat (third))
  thirdModulo = parseInt((secondModulo % 97).toString().concat (fourth))
  mod97Operation = thirdModulo%97

  return mod97Operation === 1? true : false 

}
isValid("GB82 WEST 1234 5698 7654 32")
