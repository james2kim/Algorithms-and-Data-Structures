function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}
// Generate a randomly filled array
function createRandomArray(size = 5){
  let a = new Array(size);
  for(let i = 0; i < size; i++)
    a[i] = Math.floor(Math.random() * 100);
  
  return a;
}
const array = createRandomArray(25);

var MinHeap = function() {
  // Only change code below this line
  this.values = []

this.insert = function(value) {
     this.values.push(value)
     let child = this.values.length - 1
     let parent = Math.floor((child - 1) / 2)
     while (this.values[child] < this.values[parent]) {
       [this.values[child], this.values[parent]] = [this.values[parent], this.values[child]]
       child = parent
       parent = Math.floor((child - 1) / 2)
     }
}

  this.remove = function() {
    let arr = [...this.values];
    let max = arr.splice(0, 1);
    this.values = [];
    for (let i = 0; i < arr.length; i++) {
      this.insert(arr[i]);
    }
    return max[0];
  }

  this.sort = function() {
    const sortedData = []

    const helper = (arr) => {
      if(arr.length === 0) {
        return 
      }
      let item = this.remove()
      sortedData.push(item)
      helper(arr.slice(1))
    }
    helper(this.values)
  return sortedData
  }

  // Only change code above this line
};

let heap = new MinHeap()
console.log(heap)
heap.insert(10)
heap.insert(9)
heap.insert(8)
heap.insert(12)
console.log(heap)
heap.remove()
console.log(heap)

