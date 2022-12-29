// This solution is at least 7x times more performant than initial solution. It loops through the string in both directions and eliminates the possibility of a palindrome if any letters do not match.

function palindrome(str) {
const filteredString = str.replace(/[^0-9a-z]/gi, '').toLowerCase()
 let front = 0
 let back = filteredString.length -1
 while (front < back) {
   if (filteredString[front] !== filteredString[back]) return false
   else {
        front++
        back--
    }   
 }
 return true
}



palindrome("_eye")



// Second Solution for a more concise code.

function palindrome(str) {
  const filteredStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase()
  return filteredStr.split('').reverse().join('') === filteredStr
}

palindrome("eye");



