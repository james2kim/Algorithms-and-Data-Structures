var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.add = function(integer) {
    const node = new Node(integer)
      if (this.root === null) {
        this.root = node
      } else {
        let current = this.root
        while (true) {
          if (node.value > current.value) {
            if (current.right !== null) {
              current = current.right
            } else {
              current.right = node
              break
            }
          } else {
            if (current.left !== null) {
              current = current.left
            } else {
              current.left = node
              break
            }
          }
        }
    }
  }
  // Only change code above this line
}
