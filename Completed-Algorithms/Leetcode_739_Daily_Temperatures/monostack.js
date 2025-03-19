/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stack = []
    const answers = new Array(temperatures.length).fill(0)

    for(let i = 0; i < temperatures.length; i++) {
        while(stack.length > 0 && temperatures[i] > stack[stack.length - 1].temp) {
            const {prevIndex} = stack[stack.length - 1]
            answers[prevIndex] = i - prevIndex
            stack.pop()
        }
        stack.push({prevIndex: i, temp: temperatures[i]})
    }
    return answers
};
