function LinkedList() {
  let length = 0;
  let head = null;

  const Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    let node = new Node(element);
    if(head === null){
        head = node;
    } else {
      let currentNode = head;

      while(currentNode.next){
        currentNode = currentNode.next;
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
  this.isEmpty = function() {
    if (this.head() === null) {
      return true
    }
    return false
  }

  this.indexOf = function(el) {
    let currentNode = head, index = -1, indexFound = false;

    while (!indexFound && currentNode) {
      index++;
      if(currentNode.element === el) {
        indexFound = true;
      }
      currentNode = currentNode.next;
    } 

    return indexFound ? index : -1;
  };

    this.elementAt = function(i) {
    let currentNode = head, currentElement, index = -1, indexReached = false;

    while (!indexReached && currentNode) {
      index++;
      currentElement = currentNode.element;
      if(index === i) {
        indexReached = true;
      }
      currentNode = currentNode.next;
    } 

    return indexReached ? currentElement : undefined;
  }
  // Only change code above this line
}
