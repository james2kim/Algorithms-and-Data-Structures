var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.levelOrder = function() {
    if (this.root == null) {
      return null
    }
    const data = []
    const visited = [this.root]
    while(visited.length > 0) {
      data.push(visited[0].value)
      if (visited[0].left) {
        visited.push(visited[0].left)
      }
      if (visited[0].right) {
        visited.push(visited[0].right)
      }
      visited.shift()
    }
    return data
  }
    this.reverseLevelOrder = function() {
    if (this.root == null) {
      return null
    }
    const data = []
    const visited = [this.root]
    while(visited.length > 0) {
      data.push(visited[0].value)
            if (visited[0].right) {
        visited.push(visited[0].right)
      }
      if (visited[0].left) {
        visited.push(visited[0].left)
      }
      visited.shift()
    }
    return data
  }
  // Only change code above this line
}
