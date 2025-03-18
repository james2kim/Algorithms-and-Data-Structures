var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line

  this.isPresent = (value) => {
    let exists = false;
    const helper = (current) => {
      if(current.value === value) {
        exists = true
        return
      }
      if(current.left && value < current.value) {
        helper(current.left)
      } else if (current.right && value > current.value){
        helper(current.right)
      }
    }
    if(!this.root) {
      return false
    } else {
      helper(this.root)
    }
    return exists
  }
  
  // Only change code above this line
}
