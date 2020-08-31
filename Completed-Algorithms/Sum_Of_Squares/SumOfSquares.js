function sumsq(array) {
 let sum = 0
 for (let i = 0;i < array.length;i++){
   sum += Math.pow (array[i], 2)
 }
return sum
}
sumsq([1, 2, 3, 4, 5])
