var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.inorder = function() {
    if (!this.root) return null
    let visited = []
    function traverse (node) {
      if (node.left) traverse(node.left)
      visited.push(node.value)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return visited
  }

  this.preorder = function() {
    if (!this.root) return null
    let visited  = []
    function traverse(node) {
      visited.push(node.value)
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return visited
  }

  this.postorder = function() {
    if (!this.root) return null
    let visited = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      visited.push(node.value)
    }
    traverse(this.root)
    return visited
  }
  
  // Only change code above this line
}
