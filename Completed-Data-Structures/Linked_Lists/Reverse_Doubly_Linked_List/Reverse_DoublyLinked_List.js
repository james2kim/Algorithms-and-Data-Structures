const Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
const DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // change code below this line

  this.reverse = function() {
    if (this.head === null) return null;

    let currentNode = this.head;
    this.tail = currentNode;

    while (currentNode !== null) {
      let prev = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next = prev;
      if (currentNode.prev) {
        currentNode = currentNode.prev;
      } else {
        this.head = currentNode;
        break;
      }
    }
  };
  // change code above this line
};
