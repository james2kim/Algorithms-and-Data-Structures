// This solution is at least 7x times more performant than initial solution. It loops through the string in both directions and eliminates the possibility of a palindrome if any letters do not match.



function palindrome(str) {
const filteredString = str.replace(/[^0-9a-z]/gi, '').toLowerCase()
 let front = 0
 let back = filteredString.length -1
 while (front < back) {
   if (filteredString[front] !== filteredString[back]) return false
  
   else
      {
        front++
        back--
      }   
 }
 return true
}



palindrome("_eye")









// Initial Solution. Simple but not optimal if the string is extremely long because we have to split the entire string reverse it and join it again. 

function palindrome(str) {
//First, for ease if comparison, we will lowercase the string and remove all white spaces and special characters 
const filteredString = str.replace(/[^0-9a-z]/gi, '').toLowerCase()

// Reverse the string 
const reversedString = filteredString .split('').reverse().join('')

// Compare reversed string to the filtered string 
  if(reversedString === filteredString) {
    return true;
  } else {
    return false; 
  }

}



palindrome("eye");



