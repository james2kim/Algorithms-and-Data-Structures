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
  // change code below this line
  difference (set) {
    const newSet = new Set()
    const curSet = this
    const newSetValues = set.values()
    const curSetValues = this.values()

    for (let i = 0; i < curSetValues.length; i++) {
      if (newSetValues.includes(curSetValues[i])) {
        curSet.remove(curSetValues[i])
        // console.log(curSet)
      }
    }
    return this
  }
  // change code above this line
}

let seet = new Set()
seet.add(1)
seet.add(2)
seet.add(3)
seet.add(4)
seet.add(5)
const array = [5,5,6,4,3,2,1,5]

let newSet = new Set()
newSet.add(5)
newSet.add(5)
newSet.add(4)
newSet.add(6)
newSet.add(3)
newSet.add(1)
seet.difference(newSet)

