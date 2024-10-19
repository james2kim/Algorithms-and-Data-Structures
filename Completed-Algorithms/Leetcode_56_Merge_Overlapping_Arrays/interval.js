/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // Sort the intervals by the start
    intervals.sort((a,b) => a[0] - b[0])
    const results  = []
    intervals.forEach(interval => {
        //if empty or the intervals first item is greater than the last item in existing array add
        if(results.length === 0 || interval[0] > results[results.length - 1][1]) {
            results.push(interval)
        } else {
            // othrwise, we will make the last end index of results the greater between the interval end and results end
            results[results.length - 1][1] = Math.max(results[results.length - 1][1], interval[1])
        }
    })
    return results
};
