/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const hash = {}
    let bool = false
    nums.forEach((num, i) => {
        if(!hash.hasOwnProperty(num.toString())) {
            hash[num] = [i]
        } 
        else if (hash.hasOwnProperty(num.toString())) {
            hash[num].forEach(j => {
                if(Math.abs(i - j) <= k) {
                    bool = true
                }
            })
            hash[num].push(i)
        }
    })
    return bool
};
