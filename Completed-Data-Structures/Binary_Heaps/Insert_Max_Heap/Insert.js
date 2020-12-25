const MaxHeap = function() {
  // Only change code below this line
   this.values = [] 

   this.insert = (value) => {
     this.values.push(value)
     let child = this.values.length - 1
     let parent = Math.floor((child - 1) / 2)
     while (this.values[child] > this.values[parent]) {
       [this.values[child], this.values[parent]] = [this.values[parent], this.values[child]]
       child = parent
       parent = Math.floor((child - 1) / 2)
     }
   }

   this.print = () => this.values
  
  // Only change code above this line
};
