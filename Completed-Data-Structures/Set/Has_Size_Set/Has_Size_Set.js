function checkSet(arrToBeSet, checkValue){

   // change code below this line
   const set = new Set(arrToBeSet)
   const hasCheckValue = set.has(checkValue)
   const howBig = set.size
   return [hasCheckValue, howBig]
   // change code above this line

}

checkSet([4, 5, 6], 3); // Should return [ true, 3 ]
