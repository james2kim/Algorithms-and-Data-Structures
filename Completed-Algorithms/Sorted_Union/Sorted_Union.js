function uniteUnique(arr) {
  const flattened = [...arguments].flat()
  let sortedUnion = []
  flattened.forEach(value => {
   !sortedUnion.includes(value) 
    ? sortedUnion.push(value) 
    : '' 
 })
  return sortedUnion
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
