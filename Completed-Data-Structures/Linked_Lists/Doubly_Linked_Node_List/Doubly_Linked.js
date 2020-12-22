class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(val) {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail= newNode
        }
        this.length++
        return this

    }

    pop() {
        if(!this.head) return undefined

        let tail = this.tail

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = tail.prev
            this.tail.next = null
            tail.prev = null
        }
        this.length --
        return tail
    }

    shift() {
        if(this.length === 0) return undefined

        let oldHead = this.head

        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead
            this.head.prev = null
            oldHead.next = null
        }
        this.length --
        return oldHead
    }

    unshift(val) {
        let newNode = new Node(val)
        if(this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return null

        if (index <= this.length / 2) {
            let counter = 0
            let current = this.head
            while (counter !== index) {
                current = current.next
                counter++
            }
        
        } else {
            let counter = this.length - 1
            let current = this.tail
            while (counter !== index) {
                current = current.previous
                counter --
            }
        }
        return current
    }

    set(value,index) {
        let node = this.get(index)
        if (!node) return false 
        node.val = value
        return true
    }

    insert(value,index) {
        if (index < 0 || index >= this.length) return false 
        if(index === 0) return !!this.unshift(value)
        if (index === this.length) return !!this.push(value)

        let node = new Node (value)
        let previous = this.get(index - 1)
        let after = previous.next
        previous.next = node, node.prev = previous
        node.next = after, after.prev = node
        this.length ++
        return true
    }

    remove (index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        let removedNode = this.get(index)
        let before = removedNode.prev
        let after = removedNode.next 

        before.next = after, after.prev = before
        removedNode.prev = null, removedNode.next = null
        this.length -- 
        return removedNode
    }
}
