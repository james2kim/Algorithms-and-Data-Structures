/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {}
    for (let num of nums) {
        if (!obj.hasOwnProperty(num)) obj[num] = 1
        else obj[num] ++
    }
    for (let key in obj) {
        if(obj[key] === 1) return +key
    }
};
