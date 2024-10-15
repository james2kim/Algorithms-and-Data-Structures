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
    let node = new Node(integer)

    const helper = (current) => {
      if (node.value === current.value) {
        return null
      }
      if (node.value < current.value) {
        if(!current.left) {
          current.left = node
            return
        } else {
          helper(current.left)
        }
      } else {
        if(!current.right) {
          current.right = node
  return
        } else {
          helper(current.right)
        }
      }
    }
    if(!this.root) {
      this.root = node
    } else {
    helper(this.root)
    }
  } 
  // Only change code above this line
}
let tree = new BinarySearchTree()
tree.add(5)
tree.add(10)
tree.add(2)
tree.add(20)
console.log(tree)
