/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result 
    if (x >=0) {
        result = +x.toString().split('').reverse().join('')     
        if (result > Math.pow(2,31)) return 0
        return result 
    }
    
    let newStr = x.toString().slice(1)
    result = [x.toString()[0], +newStr.split('').reverse().join('')].join('')
    if (result < Math.pow(-2, 31)) return 0
    return result
   
};
