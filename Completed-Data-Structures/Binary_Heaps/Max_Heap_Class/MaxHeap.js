// For any index of an array n
// The left child is stored at 2n + 1
// The right child is stored at 2n + 2

// For any child node at index n, its parent is at index Math.floor((n - 1) / 2)


class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value)    
        this.bubbleUp()
    }

    bubbleUp() {
        let child = this.values.length -1
        let parent = Math.floor((child - 1) / 2)

        while (this.values[child] > this.values[parent]) {
            [this.values[child], this.values[parent]] = [this.values[parent], this.values[child]]
            child = parent 
            parent = Math.floor((child - 1) / 2)
        }
    }

    remove () {
        const max = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
            this.bubbleDown()
        }
        return max
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
                if (leftChild > element) {
                    swap = leftChildIndex
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex]
                if ((swap === null && rightChild > element) || (swap!==null && rightChild > leftChildIndex)) {
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
