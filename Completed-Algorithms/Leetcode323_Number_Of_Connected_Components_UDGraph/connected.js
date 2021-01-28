/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    let adjacencyList = {}
    for (let i = 0; i < n; i++) {
        adjacencyList[i] = []
    }
    const addEdge = (v1, v2) => {
        adjacencyList[v1].push(v2)
        adjacencyList[v2].push(v1)
    }
    for (let i = 0; i < edges.length; i++)  {
        addEdge(edges[i][0], edges[i][1])        
    }
    
     function DFSRecursive(adjacencyList, start){
        const result = []
        const visited = {}
        let list = adjacencyList
        
        function DFS (vertex) {
            if (!vertex) return null
            visited[vertex] = true
            result.push(+vertex)
            for (let i = 0; i < adjacencyList[vertex].length; i++) {
                if (!visited.hasOwnProperty(adjacencyList[vertex][i].toString())) DFS(adjacencyList[vertex][i].toString())
            }
        }
        DFS(start)
        return result.map(num => num.toString())
    }
    
    let visited 
    let vertices = Object.keys(adjacencyList)
    let start = vertices[0]
    let count = 0
    while (vertices.length > 0) {
        visited = DFSRecursive(adjacencyList, start)    
        count++
        vertices = vertices.filter(vertex => !visited.includes(vertex))
        start = vertices[0]
    }

    return count
}
