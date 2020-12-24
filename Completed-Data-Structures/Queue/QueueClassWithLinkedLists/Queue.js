class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}


class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(val) {
        let node = new Node(val)
        if(!this.first) {
            this.first = node
            this.last = node
        } else {
            this.last.next = node
            this.last = node
        }
        return ++this.size
    }
    dequeue (){
        if (!this.first) return null
        let removedNode = this.first
        if (removedNode === this.last) {
            this.first = null
            this.last = null
        } else {
            this.first = this.first.next
        }
        this.size --
        return removedNode
    }
} 
