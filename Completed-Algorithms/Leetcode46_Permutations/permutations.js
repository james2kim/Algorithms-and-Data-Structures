//Heaps Algorithm 

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
      if (nums.length === 1) return [nums]

  const output = []
  const swap = (arrToSwap, a, b) => {
    [arrToSwap[a], arrToSwap[b]] = [arrToSwap[b], arrToSwap[a]]
  }

  const generate = (n, heap) => {
    if (n === 1) {
     output.push(heap.slice())
    return
    }
    generate(n - 1, heap)

    for (let i = 0; i < n -1; i++) {
      if (n % 2 === 0) {
        swap(heap, i, n - 1)
      } else {
        swap(heap,0, n - 1)
      }
      generate(n -1, heap)
    }
  }
generate(nums.length, nums.slice())
    return output    
};
