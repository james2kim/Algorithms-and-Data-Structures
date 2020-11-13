const twoSum = (nums, target) => {
    let start = 0
    while (true) {
    for (let i = start + 1; i < nums.length; i++) {
        if (nums[start] + nums[i] === target ) {
            return [start,i]
        }
    }
    start ++        
    }

    
};

twoSum([2,7,11,15], 9)
