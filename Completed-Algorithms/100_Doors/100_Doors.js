function getFinalOpenedDoors(numDoors) {
  let doors = new Array(100)
  let count = 0
  let finalArray = [], i;
  for (let i = 0;i < doors.length;i++){
    doors[i] = false 
  }
  while (numDoors > 0) {
    for(let i = count;i < doors.length;i += (count + 1)){
      if (doors[i] === false ) {
        doors[i] = true
        } else{
          doors[i] = false 
        }
     }

    count++
    numDoors--
  }

for (i = 0; i < doors.length; i++)
  if (doors[i] === true)
    finalArray.push(i+1);
    return finalArray

}
getFinalOpenedDoors(100)
