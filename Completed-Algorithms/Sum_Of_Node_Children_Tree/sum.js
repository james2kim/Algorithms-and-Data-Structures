/*Create a function that passes in a ID  and returns the sum of it and all of its children inside of the tree */

const tree = [
  {parent: null, id: 'A', value: 3},
  {parent: 'K', id: 'Y', value: 8},
  {parent: 'B', id: 'J', value: 20},
  {parent: 'Z', id: 'H', value: 10},
  {parent: 'B', id: 'K', value: 5},
  {parent:'B', id: 'I', value: 100},
  {parent: 'G', id: 'L', value: 6},
  {parent: 'A', id: 'G', value: 2},
  {parent: 'Z', id: 'B', value: 30},
  {parent: 'A', id: 'D', value: 9},
  {parent: 'A', id: 'Z', value: 1},
]

const bfsSolution = (id) => {
  let sum = 0;
  const node = tree.find(node => node.id === id)
  sum += node.value
  const visited = [node]
  while(visited.length > 0) {
    for(let i = 0; i < tree.length; i++) {
      if(tree[i].parent === visited[0].id) {
        sum +=tree[i].value
        visited.push(tree[i])
      }
    }
    visited.shift()
  }
return sum
}
console.log(bfsSolution('Z'))
console.log(bfsSolution('B'))

const dfsSolution = (id) => {
  let sum = 0;
  let helper = (value) => {
      const node = tree.find(n => n.id === value)
    for(let i = 0; i < tree.length; i++) {
      if(tree[i].parent === value) {
        helper(tree[i].id)
      }
    }
    sum += node.value
  }
  helper(id)
  return sum
}
console.log(dfsSolution('G'))
