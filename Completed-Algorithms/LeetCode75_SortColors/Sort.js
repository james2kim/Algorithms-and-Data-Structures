/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Swapped Using Bubble Sort 

//Sorted With BubbleSort

var sortColors = function(nums) {
    let swapC = 1
    let swapCC = 0
    
    while (swapC > 0) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > nums[i+1]) {
              [nums[i], nums[i+1]] = [nums[i + 1], nums[i]]
                swapCC++
            } 
        }
        swapC = swapCC
        swapCC = 0
    }
   
};
