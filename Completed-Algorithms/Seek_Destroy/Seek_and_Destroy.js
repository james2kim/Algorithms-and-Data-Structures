function destroyer(arr,...args) {
   const filter=[...args]
   
   arr=arr.filter(item=>{
     return !filter.includes(item)
   })
   return arr
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)
