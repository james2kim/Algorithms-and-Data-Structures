/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const ranges = []
    let left = null
    for(let i = 0; i < nums.length; i++) {
        if(left == null) {
          left = i
        } 
         if(nums[i] + 1 !== nums[i+1]) {
            if(nums[i] !== nums[left]) {
                ranges.push(`${nums[left]}->${nums[i]}`)
            } else {
                ranges.push(nums[i].toString())
            }
            left = null
        }
    }
    return ranges
};
