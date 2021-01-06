var isPalindrome = function(x) {
    let num = x.toString()
    let reverse = num.split('').reverse().join('')
    return num === reverse ? true : false 
  
};

isPalindrome(10)
