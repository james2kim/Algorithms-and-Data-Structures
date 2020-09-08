function updateInventory(arr1, arr2) {
   const sort = (a,b) => a[1] > b[1] ? 1 : -1
   const length1 = arr1.length
   const length2 = arr2.length
   let count = 0
   let listOne = []

    if (length1 === 0) {
        return arr2.sort(sort)
    } else if (length2 === 0){
        return arr1.sort(sort)
    } else 
        {
// Push items in current Inventory into a new list array
              for (let i = 0;i < length1; i++) {
                listOne.push(arr1[i][1])
            }
// If the new inventory item does not exist in cur inv, we will create a new entry in cur inv
              for (let i = 0;i < length2; i++) {
                 if (!listOne.includes(arr2[i][1])) {
                    arr1.push(arr2[i])   
                }
            }

// If the new inventory item exists in cur inv, we will increment the existing items quantity inside cur inv. 
              while (count < arr1.length - 2) {
                for (let i = 0;i < length2;i++) {
                    if (arr1[count][1] === arr2[i][1]){
                      arr1[count][0] += arr2[i][0]
                    }
                  }  
                  count++ 
            }
            return arr1.sort(sort)
        }

}

// Example inventory lists
const curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

const newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
