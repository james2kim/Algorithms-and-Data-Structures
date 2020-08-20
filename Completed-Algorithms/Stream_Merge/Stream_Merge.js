function mergeLists(lists) {
let newArray=lists.flat()

let streamMerge=newArray.sort((a,b)=>{
  return a-b
})
return streamMerge
}
mergeLists([[1, 4, 7, 10], [2, 5, 8, 11], [3, 6, 9, 12]])
