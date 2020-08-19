function permAlone(str) {
  const stringChars = str.split('')

// If there is only 1 character, there are no repeats, so there is one permutable string
  if (str.length === 1) {
    return 1
  }

// If all letters in string are the same, they are all repeats, so there are zero permutations 
  if (stringChars.every(char => char === stringChars[0])) {
    return 0
  } 


// Map over the stringChars array, and add a unique number identifier behind each character 
  const indexChars = stringChars.map((element,index) => {
    return element.concat(index+1)
  })
  // Initialize stringPerms to the first string in function parameter 
  let stringPerms = [indexChars.join('')]

// helper function to figure out total number of permutations if repeat was allowed 
  const factorial = (n) => {
    if(n == 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
 }

// Helper function to see if characters are repeating
  const findFirstRepeatedChar = (s) => { 
      const ot = false;
        for (let i = 0; i < s.length; i++) 
          {
            if (s[i] == s[i+1])  { 
              return s[i];
            } 
          }
       return ot; 
} 
const totalPermutations = factorial(str.length)

// function to generate random integer from 0  to the str.length-1
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// This helper function compares to see if the random number generated is the same as the index value where no more permutations are possible
function numberOtherThanIndex(number,index) {
  let randomNumber = number
  while (randomNumber === index) {
    randomNumber = getRandomInt(str.length)
  }
  return randomNumber
}


// includedStrings array will carry all values of permutations that have been seen, we will compare our permuted strings array to the value of this array. If the string is found in the included Strings array, that value was already permuted which means for this iteration, we must change the swapping order randomly. 
let includedStrings = [indexChars.join('')]

// Loop endlessly until the stringPerms array has permutuations equal to the totalPermutations we calculated from the factorial function 
while (stringPerms.length < totalPermutations) 
  {

// We will loop through each character in indexChars 
    for (let i = 0; i < indexChars.length - 1;i++) 
      {
      // The swapping algorithm is the same as bubble sort, but it will not work forever. Nevertheless, we will use it until it doesnt work
      let temp = indexChars[i]
      indexChars[i] = indexChars [i+1]
      indexChars [i+1] = temp
      const joinedString = indexChars.join('')  
// if the permutedString is not included in the includedStrings Array, it has not been permuted yet so we add to stringPerms and includedStrings. However, we will reach a permutation that has been permuted before. In this else scenario, we will change up the swapping order randomly and begin the algorithm again 
      if (!includedStrings.includes(joinedString)) 
        {
          stringPerms.push(joinedString)
          includedStrings.push(joinedString)
        } 
      else 
        {
          const random =  getRandomInt(str.length) 
          const randomNumber = numberOtherThanIndex(random,i)
          let temp = indexChars[i]
          indexChars[i] = indexChars[randomNumber]
          indexChars[randomNumber] = temp
          const newJoinedString = indexChars.join('')  
           if (!includedStrings.includes(joinedString))
              {
                stringPerms.push(newJoinedString)
                includedStrings.push(joinedString)
              }
        }
  // Inside of the for loop, if we reach the total permations amount, we will break out of the loop entirely. 
  if (stringPerms.length === totalPermutations) break
    }
  }

// After we have all permuted strings, we will remove the number identifier we used in the beginning to distiguish characters
let regex = /[0-9]/gi
const removeNumbers = []
for (let i =0; i < stringPerms.length; i++) {
  removeNumbers.push(stringPerms[i].replace(regex,''))
}

// We will filter into a new array all permuted strings that do not have repeated characters
const noRepeats = removeNumbers.filter(element => {
  return !findFirstRepeatedChar(element)
})

// Final value is the number of no repeat permutations
return noRepeats.length

}

permAlone("a")
