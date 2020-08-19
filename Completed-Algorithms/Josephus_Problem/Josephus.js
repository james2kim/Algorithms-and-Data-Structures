function josephus(init, kill) {
let prisoners=[]
// create an array of init prisoners, numbers 1-init
for (let i = 1; i <= init; i++) {
  prisoners.push(i)
}

// Create filter array for killed prisoners 
let prisonersFilter = []
// Initialize kill counter 
let killCounter = kill

// while the prisoners length is greater than 1, keep looping 
while (prisoners.length > 1) {

  // put each prisoner, when kill counter is 0 into filter array 
  for (let i = 0;i < prisoners.length ; i++) {
    killCounter --
    if (killCounter=== 0) {
    prisonersFilter.push (prisoners[i])
    killCounter = kill
  }
}

// Filter results from prisoners array 
prisoners = prisoners.filter(item => {
  return !prisonersFilter.includes(item)
})
}

return prisoners[0] 
}

josephus(17,6)
