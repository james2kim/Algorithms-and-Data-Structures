//  To solve this problem, we must split the string is split into three sections, the first part which begins with the largest consonant cluster from the beginning of original string, the second part, which begins with the first vowel until the end of the original string, and the third part which is either 'ay' or 'way' depending on if the original string begins with a consonant or vowel. We need to obtain the correct values for the three parts. 

function translatePigLatin(str) {

 const vowels = ['a','e','i','o','u']
  let endCocat = ''
  let firstPart = ''
  let index
  let secondPart
  let pigLatin
  let thirdPart

// If the first character is equal to a vowel, we will add 'way' to end of string, else we will add 'ay'
  if (vowels.includes(str[0])) {
    endCocat = 'way'
  } else {
    endCocat = 'ay'
  }

// we will loop through the string and for the largest consonant cluster, we will add to variable firstChar, if we run into a vowel, we will break from loop
  for (let i = 0; i < str.length;i++) {
    if (vowels.includes(str[i])) {
        break
    }
      firstPart +=str[i]
  }
// We need to calculate index to see how where we begin our string slice. 
  index = firstPart.length
  secondPart = str.slice(index, str.length)
 
//  Pig latin takes a string, and with its three parts we mentioned above, takes the first part, removes it and concatonates it to the end of the string. then it adds 'ay' or 'way' depending on condition mentioned above. 
  pigLatin = secondPart.concat(firstPart,endCocat)
  return pigLatin
}

translatePigLatin("glove")
