/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    // initialize n as the length of nums
    let n = nums.length
    // initialize an array of seen values to size n +1 
    const seen = new Array(n + 1).fill(false)

// for each element in num that is greater than 0 and less than or equal to the length of nums, we mark that as true
    nums.forEach((num, i) => {
        if(num > 0 && num <= n) {
            seen[num] = true
        }
    })

    // looping from 1 to n, if seen[i] is false, we return i
    for(let i = 1; i <= n; i++) {
        if(!seen[i]) {
            return i
        }
    }
    //otherwise we return n + 1
 return n + 1
};
