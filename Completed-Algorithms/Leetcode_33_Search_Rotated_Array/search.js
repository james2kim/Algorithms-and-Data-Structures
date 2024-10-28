/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // use binary search to find pivot index
    let left = 0
    let right = nums.length - 1
    let pivotIndex = 0;

    while(left <= right) {
        let middle = Math.floor((left + right) / 2)
        if(nums[middle] <= nums[nums.length - 1]) {
            right = middle - 1
            pivotIndex = middle
        } else {
           left = middle + 1
        }
    }

// custom binary search for boundary
    const binarySearch = (leftB, rightB) => {
        let left = leftB
        let right = rightB

        while (left <= right) {
            let middle = Math.floor((left + right) / 2)
            if(nums[middle] === target) {
                return middle
            } else if (nums[middle] < target) {
                left = middle + 1
            } else {
                right = middle - 1
            }
        }
        return -1
    }
    //if left side has value, return, otherwise do binary search on other side of pivot
    let leftAnswer = binarySearch(0, pivotIndex)
    if(leftAnswer !== -1) {
        return leftAnswer
    }
    return binarySearch(pivotIndex, nums.length -1)
};
