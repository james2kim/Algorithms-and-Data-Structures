class DoublyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}
const DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // Only change code below this line
  this.add = function(data) {
    const node = new DoublyLinkedListNode(data)
    if (this.head === null) {
      this.head = node
       this.tail = this.head;
    }  else {
         // link the current tail and new tail
        this.tail.next = node
        node.previous = this.tail
    } 
     // reassign the tail to be the new node
    this.tail = node
  }

  this.remove = function(data) {
    if (this.head === null)return null
    let currentNode = this.head
    if (currentNode.data === data)
      {
        this.head = currentNode.next
        currentNode.next.previous = null
      } 
    else 
      {
          while(currentNode.data !== data) {
            currentNode = currentNode.next;
        }

          if (currentNode !== null) {
            currentNode.previous.next = currentNode.next
              if (this.tail === currentNode) {
                this.tail = currentNode.previous
              } else {
                currentNode.next.previous = currentNode.previous
              }
          }
        }
  }

  // Only change code above this line
};
