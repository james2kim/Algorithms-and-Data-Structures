/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, pre) {
    // create adjacency list
    const adj = {}
    for (let i = 0; i < numCourses; i++) {
        adj[i] = []
    }
    for (let i = 0 ; i < pre.length; i++) {
        const [v1,v2] = pre[i];
        adj[v1].push(v2)
    }
    const vis = new Array(numCourses).fill(0)
    const results = []

    const dfs = n => {
        vis[n] = 2;
        for (let i = 0; i < adj[n].length; i++) {
            if(vis[adj[n][i]] === 0) {
                if(dfs(adj[n][i])) {
                    return true
                }
            }
            else if (vis[adj[n][i]] === 2) {
                return true
            }
        }
        vis[n] = 1
        results.push(n)
        return false
    }

    for(let i = 0 ; i < numCourses; i++) {
        if(vis[i] === 0) {
            if(dfs(i)) {
                return []
            }
        }
    }
    return results

};
