var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  
  this.isPresent = function(val) {
    if (!this.root) return false 
    let current = this.root
    while (true) {
      if (val === current.value) return true
      if (val > current.value) {
        if (current.right) {
          current = current.right
        } else {
          return false 
        }
      } else {
        if (current.left) {
          current = current.left
        } else {
          return false 
        }
      }
    }
  }
  // Only change code above this line
}
