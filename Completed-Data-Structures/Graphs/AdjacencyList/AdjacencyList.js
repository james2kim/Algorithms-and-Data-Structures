const undirectedAdjList = {};
const vertices = ['James', 'Jill', 'Jenny', 'Jeff']
vertices.forEach(vertex => undirectedAdjList[vertex] = [])
const addEdge = (vertex1, vertex2) => {
    undirectedAdjList[vertex1].push(vertex2)
    undirectedAdjList[vertex2].push(vertex1)
}
addEdge('Jeff', 'James')
addEdge('Jill', 'Jenny')
addEdge('Jeff', 'Jenny')
