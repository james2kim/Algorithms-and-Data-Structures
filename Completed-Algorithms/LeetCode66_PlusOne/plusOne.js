/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let stringNum = digits.map(num => num.toString())
    
    if (+digits.join('') > Number.MAX_SAFE_INTEGER) {
        stringNum[stringNum.length -1] = (+stringNum[stringNum.length -1] + 1).toString()
        if (stringNum[stringNum.length -1] === '10') {
            let current = 1
            let next = 2
            for (let i = stringNum.length - 1; i >= 0; i--) {
                if (i === 0 && stringNum[i] === '10') {
                    stringNum[i] === '0'
                    stringNum.unshift('0')
                }
                if (stringNum[stringNum.length - current] !== '10') break
                stringNum[stringNum.length - current] = '0'
                stringNum[stringNum.length -next] = (+stringNum[stringNum.length -next] + 1).toString()
                current++ 
                next++
            }
        
        }

    } else {
        stringNum = (+stringNum.join('') + 1).toString()
    }
 
    let finalArray = []
    for (let i = 0; i < stringNum.length; i++) {
        if (stringNum[i].length > 1) {
            let temp = stringNum[i].split('')
            finalArray.push(+temp[0])
            finalArray.push(+temp[1])
        } else {
            finalArray.push(+stringNum[i])
        }
    }
    return finalArray
};
