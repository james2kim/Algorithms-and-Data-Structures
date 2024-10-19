

function dfs(list, root) {
  const results = []
  const visited = {}
  const traverseRoot = (vertex) => {
    visited[vertex] = true
    results.push(vertex)
    for(let i = 0; i < list[vertex].length; i++) {
      if(!visited.hasOwnProperty(list[vertex][i])) {
        traverseRoot(list[vertex][i])
      } 
    }
  }
  traverseRoot(root)

  return results
}

let adjacencyList = {
  0: [1],
  1: [0, 2],
  2: [1,3],
  3: [2]
}
let d = {
  0: [1],
  1: [0],
  2: [3],
  3: [2],
}

var exDFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];
console.log(dfs(adjacencyList, 3))
console.log(dfs(d, 3));
