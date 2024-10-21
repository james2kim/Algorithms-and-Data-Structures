
var RandomizedSet = function() {
    this.setObj = {}
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.setObj[val] === undefined) {
        this.setObj[val] = val
        return true
    }
    return false
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.setObj[val] !== undefined) {
        delete this.setObj[val]
        return true
    }
    return false
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const setArr = Object.values(this.setObj)
    return setArr[Math.floor(Math.random() * setArr.length)]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
