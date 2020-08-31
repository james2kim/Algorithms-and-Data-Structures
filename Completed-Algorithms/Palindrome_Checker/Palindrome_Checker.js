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
