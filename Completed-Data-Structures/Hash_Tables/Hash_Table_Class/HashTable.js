function hash (key, arrayLength) {
    let total = 0
    let WEIRD_PRIME = 31
    for (let  i = 0 ; i < Math.min(key.length, 100); i++) {
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrayLength
    }
    return total
}


// Handle Collisions Methods

// 1. Seperate Chaining : With seperate chaining, at each index in our array we store values using a more sohisticated data structure (i.e array, list). Nested Array in same index


// 2. Linear Probing: With linear probing, when we find a collision, we search through the array to find the next empty slot. 

class HashTable {

    constructor(size=53){
      this.keyMap = new Array(size);
    }
    
    _hash(key) {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
    }

    set(key, value) {
        let index = this._hash(key)
        if (this.keyMap[index]) {
            this.keyMap[index].push([key, value])
        } else {
            this.keyMap[index] = []
            this.keyMap[index].push([key,value])
        }
    }

    get(key,value) {
        let index = this._hash(key)
        if (!this.keyMap[index]) return undefined
        for (let i = 0; i < this.keyMap[index].length; i++) {
            if (this.keyMap[index][i][0] === key) return this.keyMap[index][i]
        }
    }

    values() {
        let valuesArr = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr
    }

    keys() {
        let valuesArr = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][0])){
                        valuesArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return valuesArr
    }
}

// Hash tables are collections of key value pairs

// Hash Tables can find values quickly given a key

// Can add new key value pair quickly

// Store data in a large array and work by hashing the keys

// Good hash should be fast, distribute keys uniformly, and be deterministic

// Seperate chaining and linear probing are two strategies used to deal with two keys that hash to the same index 
