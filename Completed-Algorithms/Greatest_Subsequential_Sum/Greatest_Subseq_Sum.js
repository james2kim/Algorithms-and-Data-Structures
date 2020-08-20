function maximumSubsequence(population) {
  let accumulator = 0;
  let subseq = [];
  for (let i = 0;i < population.length; i++) {
    accumulator += population [i]
    subseq.push (accumulator)
  }
  const minIndex = subseq.findIndex (number => { return number >= 0 })
  const maxIndex = subseq.indexOf (Math.max(...subseq))
  const greatestSubsequentialSum = population.slice (minIndex,maxIndex+1)
  return greatestSubsequentialSum
  
}
maximumSubsequence([ 1, 2, -1, 3, 10, -10 ])
