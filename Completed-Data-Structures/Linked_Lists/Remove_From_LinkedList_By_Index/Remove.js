function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
      head = node;
    } else {
      var currentNode = head;

      while(currentNode.next){
        currentNode  = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

    this.remove = function(element){
    let currentNode = head;
    let previousNode;
    if(currentNode.element === element){
      head = currentNode.next;
    } else {
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length --;
  };

  // Only change code below this line
  this.removeAt = function(i) {
    let currentNode = head, currentElement, index = -1, indexReached = false 
    if (i < 0 || i >= length) {
      return null
    }

    while (!indexReached && currentNode) {
      index ++
      currentElement = currentNode.element;
      if(index === i) {
        indexReached = true;
      }
      currentNode = currentNode.next;
    }
    this.remove(currentElement)
    return currentElement
  }
  // Only change code above this line
}
