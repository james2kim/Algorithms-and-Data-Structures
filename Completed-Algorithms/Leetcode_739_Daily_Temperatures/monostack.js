/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stack = []
    const answers = new Array(temperatures.length).fill(0)
    for(let i = 0; i < temperatures.length; i++) {
        while(stack.length > 0  && temperatures[i] > stack[stack.length - 1][1]) {
            const prevTemp = stack[stack.length - 1][1]
            const prevIndex = stack[stack.length - 1][0]
            if(temperatures[i] > prevTemp) {
                answers[prevIndex] = i - prevIndex
                stack.pop()
            }
        }
        stack.push([i, temperatures[i]])
    }
    return answers
};
