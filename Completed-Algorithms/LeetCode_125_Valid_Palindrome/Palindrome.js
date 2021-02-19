/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let lowerCase = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    let reverse = lowerCase.split('').reverse().join('')
    if (lowerCase === reverse) return true 
    return false 
    
};
