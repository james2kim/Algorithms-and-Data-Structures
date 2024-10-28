/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // Create an empty stack and an array with length equal to the temperatures
    const stack = []
    const answers = new Array(temperatures.length)
    //loop through each item in temperatures
    for (let i = 0; i < temperatures.length; i++) {
        // while the stack has items and the current temperature is greater than last temperature inside stack 
        while(stack.length > 0 && temperatures[i] > stack[stack.length - 1][1]) {
            let prevTemp = stack[stack.length - 1][1]
            let prevIndex = stack[stack.length - 1][0]
            //if the temperature is greater than the item on top of the stack, we will set the indices and pop the item off the stack
            if(temperatures[i] > prevTemp) {
                answers[prevIndex] = i - prevIndex
                stack.pop()
            }
        }
        // push onto the stack at each iteration.
         stack.push([i, temperatures[i]])
    }

    // set all values inside stack to 0 in answers

    for(let i = 0; i < stack.length; i++) {
        answers[stack[i][0]] = 0
    }
  return answers


};
