/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */


var canFinish = function(num, pre) {
    // create adjacency list
    const adj = {}
    
    // set the nodes of the adjacency list to each value of 0 to num -1
    for(let i = 0; i < num; i++) {
        adj[i] = []
    }
    //set all possible edges of adj list
    for(let i = 0; i < pre.length; i++) {
        const [v1, v2] = pre[i]
       adj[v1].push(v2)
    }
// initialize a visited array set to the number of courses, set each value to 0 to represent a state of not visited
    const vis = new Array(num).fill(0)

    const dfs = n => {
        //set the state of the visited to 2, which stands for visited
        vis[n] = 2

        // loop through the adjacency list at that node

        for(let i = 0; i < adj[n].length; i++) {
            //if the visited state of that iteration is 0, we will then do a dfs on that value, and basically if we find that if a connected node is visited , we will return true
            if(vis[adj[n][i]] === 0) {
                if(dfs(adj[n][i])) {
                    return true
                }
            } 
            // else if we see that the visited state of that item is visited, we know it has been visited so we have to return true 
            else if (vis[adj[n][i]] === 2) {
                return true
            }
        }
    vis[n] = 1
    return false 
    }

    for(let i = 0 ; i < num; i++) {
        if(vis[i] === 0) {
            if(dfs(i)) {
                return false
            }
        }
    }
    return true


};
