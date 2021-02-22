/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hashMap = {}
    for (let str of s) {
        if (!hashMap.hasOwnProperty(str)) hashMap[str] = 1
        else hashMap[str]++
    }
    
    for (let i = 0; i < s.length; i++) {
        if (hashMap[s[i]] === 1) return i
    }
    return -1
};
