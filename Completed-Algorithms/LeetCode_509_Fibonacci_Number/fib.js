/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    //Base Case, if we hit zero or 1, we return the num as this cant be broken down further
    if (n == 0 || n === 1) {
        return n
    }
    // fibonacci is defined as the sum of fib(n -1) + fib (n -2)
    return fib(n - 1) + fib (n - 2)
};
