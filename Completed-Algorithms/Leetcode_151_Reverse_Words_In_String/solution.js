/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let string = s.split(' ')
    let newString = []
    for (let i = string.length - 1; i >= 0; i--) {
        if (string[i] !== '') newString.push(string[i])
    }
    return newString.join(' ')
};
