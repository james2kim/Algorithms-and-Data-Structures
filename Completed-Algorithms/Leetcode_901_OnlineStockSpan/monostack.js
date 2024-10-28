
var StockSpanner = function() {
    this.stack = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let answer = 1
    let stack = [...this.stack]
    while(stack.length > 0 && stack[stack.length - 1] <= price) {
        if(stack[stack.length -1] <= price) {
            answer += 1
            stack.pop()
        }
    }
    this.stack.push(price)
    return answer

};


/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
