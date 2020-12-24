var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}
function isBinarySearchTree(tree) {
  // Only change code below this line
  if (!tree.root) return null
  let isBST = true 
  function checkTree(node) {
    if (node.left !== null) {
      let left = node.left
      if (left.value > node.value) {
        isBST = false
      } else {
        checkTree(left)
      }
    }
    if (node.right !== null) {
      let right = node.right
      if (right.value < node.value) {
        isBST = false
      } else {
        checkTree(right)
      }
    }
  }
  checkTree(tree.root)
  return isBST

  // Only change code above this line
}
