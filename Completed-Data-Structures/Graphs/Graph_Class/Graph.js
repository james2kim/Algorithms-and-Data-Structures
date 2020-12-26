// Essential graph terms

// Vertex - a node

// Edge - connection between nodes 



class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] =  this.adjacencyList[vertex1].filter(value => value !== vertex2) 
        this.adjacencyList[vertex2] =  this.adjacencyList[vertex2].filter(value => value !== vertex1) 
    }

    removeVertex(vertex) {
        let node = this.adjacencyList[vertex]

        for (let i = 0; i < node.length; i++) {
            this.removeEdge(vertex, node[i])
        }
        delete this.adjacencyList[vertex]
    }

    DFSRecursive(start) {
        const result = []
        const visited = {}
        const adjacencyList = this.adjacencyList
        function DFS (vertex) {
            if (!vertex) return null
            visited[vertex] = true
            result.push(vertex)
            for (let i = 0; i < adjacencyList[vertex].length; i++) {
                if (!visited.hasOwnProperty(adjacencyList[vertex][i])) DFS(adjacencyList[vertex][i])
            }
        }
        DFS(start)
        return result
    }

    DFSIterative(start) {
        let stack = [start]
        const visited = {}
        const result = []
        let currentVertex
        visited[start] = true
        while(stack.length > 0) {
            currentVertex = stack.pop()
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
        return result 
    }

    BFS(start) {
        let queue = [start]
        const visited = {}
        const result = []
        let currentVertex
        visited[start] = true

        while (queue.length > 0) {
            currentVertex = queue.shift()
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }
        return result
    }

}

const g = new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')

