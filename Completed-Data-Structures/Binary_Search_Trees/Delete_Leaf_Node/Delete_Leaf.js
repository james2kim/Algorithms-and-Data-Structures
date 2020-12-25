var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  // Only change code below this line

  this.remove = function(value) {

    function removeNode(node, value) {
      if (node === null) return null
      if (node.value == value) {
        if (node.left==null && node.right == null) return null

      } else if (value < node.value) {
        node.left = removeNode(node.left, value)
        return node
      } else {
        node.right = removeNode(node.right, value)
        return node
      }
    }
   this.root =  removeNode(this.root, value)
   return this.root
  }
}
