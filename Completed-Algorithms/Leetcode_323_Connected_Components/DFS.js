/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    const adjacencyList = {}
    for(let i = 0; i < n; i++) {
        adjacencyList[i] = []
    }
    edges.forEach(edge => {
        const [v1,v2] = edge
        adjacencyList[v1].push(v2)
        adjacencyList[v2].push(v1)
    })

    const visited = {}
    let connectedComponents = 0
    const DFS = (node) => {
        visited[node] = true
        for(let i = 0; i < adjacencyList[node].length; i++) {
            if(!visited.hasOwnProperty(adjacencyList[node][i])) {
                DFS(adjacencyList[node][i])
            }
        }
    }
    Object.keys(adjacencyList).forEach(key => {
        if(!visited.hasOwnProperty(key)) {
            DFS(+key)
            connectedComponents++
        }
    })
    return connectedComponents

};
