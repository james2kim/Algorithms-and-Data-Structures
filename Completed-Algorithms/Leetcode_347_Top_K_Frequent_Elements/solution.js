/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class Node {
    constructor(value, priority) {
        this.value = value
        this.priority = priority 
    }
}
class PriorityQueue {
    constructor() {
        this.values = []
    }
    
    enqueue (value, priority) {
        const newNode = new Node (value, priority)
        this.values.push(newNode)
        this.bubbleUp()
    }
    bubbleUp() {
        let index = this.values.length - 1
        const element = this.values[index]
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            let parent = this.values[parentIndex]
            if(element.priority <= parent.priority) break
            this.values[parentIndex] = element
            this.values[index] = parent
            index = parentIndex
        }
    }
    
        dequeue() {
        const min = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
            this.bubbleDown()
        }
        return min
    }
    bubbleDown () {
        let index = 0
        const length = this.values.length
        const element = this.values[0]
        while (true) {
            let leftChildIndex = 2 * index + 1
            let rightChildIndex = 2 * index + 2
            let leftChild, rightChild
            let swap = null
            
            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex]
                if (leftChild.priority > element.priority) {
                    swap = leftChildIndex
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex]
                if ((swap === null && rightChild.priority > element.priority) || (swap!==null && rightChild.priority > leftChild.priority)) {
                    swap = rightChildIndex
                }
            }
            if (swap === null) break
            this.values[index] = this.values[swap]
            this.values[swap] = element
            index = swap
        }
    }
}

var topKFrequent = function(nums, k) {
    let hashmap = {}
    let heap = new PriorityQueue 
    let output = []
    for (let i = 0; i < nums.length; i++) {
        if (!hashmap.hasOwnProperty(nums[i].toString())) {
            hashmap[nums[i]] = 1
        } else {
            hashmap[nums[i]]++
        }
    }

    for (let key in hashmap) {
        heap.enqueue(+key, hashmap[key])
    }
    for (let i = 0; i < k; i++) {
      let temp = heap.dequeue()
      output.push(temp.value)
    }
    return output
};
