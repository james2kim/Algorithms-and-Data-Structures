function LinkedList() {
  let length = 0;
  let head = null;

  const Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line
 const node = new Node(element)

    if (!head) head = node
    else 
      {
        let current = head
        while (current.next !== null) {
          current = current.next
        }
        current.next = node
      }
    length ++
 
    // Only change code above this line
  };
}
