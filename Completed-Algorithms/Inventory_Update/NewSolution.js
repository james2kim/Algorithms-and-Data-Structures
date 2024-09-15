function updateInventory(arr1, arr2) {
 //make copy of original arr1
const up = [...arr1]
const existingItems = {}
 // loop through the first arr and create dictionary for reference
for (let i = 0; i < up.length; i++) {
    existingItems[arr1[i][1]] = i
}
 // search arr2, and either update items or add to the copied arr
for (let i = 0; i < arr2.length; i++) {
    if (existingItems[arr2[i][1]] >= 0) {
        up[existingItems[arr2[i][1]]][0] += arr2[i][0]
    } else {
        up.push(arr2[i])
    }
}
 return up.sort((a,b) => a[1].localeCompare(b[1]))
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
