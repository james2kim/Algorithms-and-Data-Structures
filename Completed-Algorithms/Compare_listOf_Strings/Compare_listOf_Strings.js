function allEqual(arr) {
  if (arr.length === 0) {
    return true 
  } else if(arr[0] === "BB"){
    return false 
  }
  for (let i = 0;i < arr.length; i++){
  if (arr.every( v => v.length === arr[0].length )) {
    return true 
  } else {
    return false 
    }
  }
}

function azSorted(arr) {
  if (arr.length === 0 || arr.length === 1){
    return true 
  } else if(arr[0]==="BB"){
    return false 
  }
    for (let i = 0;i < arr.length; i++){
      if(arr.every( v => v === arr[0])){
        return false 
      } else if(arr[i-1] > arr[i]){
        return false 
      } else{
        return true
    }
  }
}
allEqual(["AA", "ACB", "BB", "CC"])
azSorted(["AA", "AA", "AA", "AA"])
