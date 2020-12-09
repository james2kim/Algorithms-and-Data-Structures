var findMedianSortedArrays = function(nums1, nums2) {
    const newArray = nums1.concat(nums2).sort((a,b) => a-b)

    if (newArray.length % 2 === 1) {
       return newArray[Math.round((newArray.length - 1) / 2)];
    }  else {
      let first = newArray.slice(0,newArray.length/2)
      let second = newArray.slice(newArray.length/2, newArray.length)
      return (first[first.length -1] + second[0]) / 2
    }
};

findMedianSortedArrays([3], [-2,-1])
