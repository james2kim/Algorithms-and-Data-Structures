class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // this method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // this method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // this method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // this method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // this method will return the size of the set
  size() {
    return this.length;
  }
  // This is our union method from that lesson
  union(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      newSet.add(value);
    })
    set.values().forEach(value => {
      newSet.add(value);
    })

    return newSet;
  }
  // This is our intersection method from that lesson
  intersection(set) {
    const newSet = new Set();

    let largeSet;
    let smallSet;
    if (this.dictionary.length > set.length) {
      largeSet = this;
      smallSet = set;
    } else {
      largeSet = set;
      smallSet = this;
    }

    smallSet.values().forEach(value => {
      if (largeSet.dictionary[value]) {
        newSet.add(value);
      }
    })

    return newSet;
  }
  // This is our difference method from that lesson
  difference(set) {
    const newSet = new Set();

    this.values().forEach(value => {
      if (!set.dictionary[value]) {
        newSet.add(value);
      }
    })

    return newSet;
  }
  // change code below this line
  isSubsetOf (set) {
    const curSetValues = this.values()
    const newSetValues = set.values()
  if (curSetValues.length === 0 && newSetValues.length ===0) 
    {
      return true 
    } 
  else if (curSetValues.length > newSetValues.length) 
    {
      return false
    } 
  else if (curSetValues.length === newSetValues.length 
  && JSON.stringify(curSetValues) !== JSON.stringify(newSetValues)) 
    {
      return false 
    }  
  else 
    {
      curSetValues.forEach(value => {
        if (!newSetValues.includes(value)) {
          return false
        } 
      })
      return true
    }
  }
  // change code above this line
}

let New = new Set()
New.add('a')
New.add('b')
New.add('c')
let Newer = new Set()
Newer.add('a')
Newer.add('b')
New.isSubsetOf(Newer)
