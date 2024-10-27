
var TimeMap = function() {
    this.timeMap = {}
    this.least = {}
    this.greatest = {}
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.timeMap[key]) {
        const innerMap = {}
        innerMap[timestamp] = value
        this.timeMap[key] = innerMap
        this.least[key] = timestamp
        this.greatest[key] = timestamp
    } else {
        this.timeMap[key][timestamp] = value
        if(timestamp < this.least[key]) {
            this.least[key] = timestamp
        } else  {
            this.greatest[key] = timestamp
        }
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    const item = this.timeMap[key]
    if (!item) {
        return ""
    } else if (item[timestamp]) {
        return item[timestamp]
    } 
    for(let i = this.greatest[key]; i >=this.least[key]; i--) {
        if(item[i] && i < timestamp) {
            return item[i]
        }
    }
    return ""
};
/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
