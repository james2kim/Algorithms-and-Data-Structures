class PriorityQueue {
    constructor(){
      this.collection = []
    }
    printCollection(){
      console.log(this.collection)
    }
    enqueue(val){
      return this.collection.push(val)
    }
    //this is a helper function to tell us what value is next to be popped
    findPriority() {
  
      let values = this.collection.map(function(keys) {
        return keys[1];
      });
      let thePriority = Math.min.apply(null, values)
      return this.collection.find(element => element[1] == thePriority)
  
    }

    dequeue() {
      //set the item to be removed to the first priority found
      let removeItem = this.findPriority()
      //get the position of where it was so it can be spliced off
      let removePosition = this.collection.indexOf(removeItem);
      this.collection.splice(removePosition, 1)
      //return only the item exclued the level of priority
      return removeItem[0]
  
    }
    // get the size by just return the length O(1) time 
    size() {
      return this.collection.length
    }
  
    // returns if the queue is empty
    isEmpty() {
      return this.size() === 0;
    }
    
  }
