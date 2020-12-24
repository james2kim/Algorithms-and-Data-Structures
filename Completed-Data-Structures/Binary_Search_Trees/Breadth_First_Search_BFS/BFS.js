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
    if (!this.root) return null
    let queue = [], visited = []
    queue.push(this.root)

    while (queue.length > 0) {
      let dequeued = queue.shift()
      visited.push(dequeued.value)
      if (dequeued.left) queue.push(dequeued.left)
      if(dequeued.right) queue.push(dequeued.right)
    }
    return visited
  }

  this.reverseLevelOrder = function() {
    if (!this.root) return null
    let queue = [], visited = []
    queue.push(this.root)
    while (queue.length > 0) {
      let dequeued = queue.shift()
      visited.push(dequeued.value)
      if(dequeued.right) queue.push(dequeued.right)
      if (dequeued.left) queue.push(dequeued.left)
    }
    return visited
  }
  // Only change code above this line
}
