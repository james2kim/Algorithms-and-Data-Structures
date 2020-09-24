class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set as an array
  values() {
    return Object.keys(this.dictionary);
  }

  // change code below this line
  
  // write your add method here
  add(value){

    if (this.has(value)) {
      return false 
    } else {
      this.dictionary[value] = value
      return true
    }
   
  }
  // write your remove method here
  remove(value){
    delete this.dictionary[value]
  }
  // write your size method here
  size () {
    return Object.keys(this.dictionary).length
  }
  // change code above this line
}
