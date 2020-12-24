var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.findMin = function (){
    if (!this.root) return null
    let current = this.root
    while (true) {
      if (!current.left) return current.value
      current = current.left
    }
  }

  this.findMax = function() {
    if (!this.root) return null
    let current = this.root
    while (true) {
      if (!current.right) return current.value
      current = current.right
    }
  }
  // Only change code above this line
}
