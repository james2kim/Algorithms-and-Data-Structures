function equilibrium(array) {
  let equilibriumIndeces = []
  if (array.length === 0){
    return []
  }
// A0+A1+A2=A4+A5+A6, sum values left of index === sum values right of index
  function compareEqValues(array,index) {
    let leftSum=0;
    let rightSum = 0;
    let arrayTwo = [...array];

// Split the array into two sub arrays by the index
  let arrayOne = arrayTwo.splice (0, index)
  arrayTwo.splice (0,1)
  
// Sum the values in both sub arrays
  let sum = arrayOne.reduce(function(a, b){
        return a + b;
    }, 0);
    let sumTwo = arrayTwo.reduce(function(a, b){
        return a + b;
    }, 0);

// A0+A1+A2=A4+A5+A6, sum values left of index === sum values right of index
    let sideEquality = (sum === sumTwo)
    // A0+A1+A2+A3+A4+A5=0, sum of all values minus indeces is equal to zero
    let totalSum = sum + sumTwo

    // return true if indeces fulfills either equlibrium definitions 
    return sideEquality || totalSum === 0 ? true:false
     
}

// Loop through the array and check to see if each value fulfilles an equalibrium condition, if yes, push value of index into final array
  for (let i = 0;i < array.length; i++) {
    if (compareEqValues (array, i)) {
      equilibriumIndeces.push (i)
    }
}

return equilibriumIndeces

}

equilibrium([1, -1, 1, -1, 1, -1, 1])
