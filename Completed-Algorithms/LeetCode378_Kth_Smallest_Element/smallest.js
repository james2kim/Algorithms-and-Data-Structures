var kthSmallest = function(matrix, k) {
    const newArray=matrix.flat()
    const streamMerge=newArray.sort((a,b)=>{
        return a-b
    })
 return streamMerge[k-1]

   
};

kthSmallest([[1,5,9], [10,11,13], [12,13,15]], 8)
