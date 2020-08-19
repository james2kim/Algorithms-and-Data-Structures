function combinations(m, n) {
const result =[]
result.length=m
let nums=[]
let final = []
function createCombinations(input,len,start) {
  if (len === 0) return
   else 
   {
     let temp =[]
      for (let i = start; i <= input.length - len; i++) {
        result[result.length - len] = input[i];
        createCombinations(input, len-1, i+1 );
         final.push([...result]) 
      }
   }

}
 
for(let i = 0;i < n; i++) {
  nums.push (i)
}

createCombinations(nums,result.length,0)

const stringArray = final.map(JSON.stringify)
const set = new Set(stringArray)
const finalCombinations = Array.from(set,JSON.parse)
return finalCombinations
}
combinations(3, 5)
