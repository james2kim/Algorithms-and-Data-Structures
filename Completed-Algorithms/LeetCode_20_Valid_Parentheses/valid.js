/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let counter = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i]=== '{' || s[i]=== '[') {
            stack.push(s[i])
            counter ++
        } 
        else 
            {
                counter --
                if (s[i] === ')') {
                    if (stack[stack.length - 1] === '(') stack.pop()
                }
                if (s[i] === '}') {
                    if (stack[stack.length - 1] === '{') stack.pop()
                }
                if (s[i] === ']') {
                    if (stack[stack.length - 1] === '[') stack.pop()
                }                
            }

    }
 
    if (stack.length === 0 && counter >= 0) return true
     return false 
  
};
