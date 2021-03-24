/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const splitString = s.split(' ').filter(word => word!=='')
    if (splitString.length === 0) return 0
    return splitString[splitString.length - 1].length
};
