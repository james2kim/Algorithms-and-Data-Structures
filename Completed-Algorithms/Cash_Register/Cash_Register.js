function checkCashRegister(price, cash, cid) {
  let descendingCID = [...cid].reverse()
  let cidCopy = []

  for (let i =0 ;i < cid.length; i++) {
    cidCopy[i] = [...cid[i]]
  }
  const cashRegisterObject = {
    status: '',
    change: []
  }

  let changeNeeded = cash-price

    let i = 0
    let value = 0
    let finalArray = []
    let change = ['', 0]
    while (changeNeeded >= 100 && descendingCID[i][1] > 0) {
      change[0] = 'ONE HUNDRED'
      changeNeeded -= 100
      descendingCID[i][1] -=100
      change[1] += 100
      changeNeeded = Math.round(changeNeeded * 100) /100
       change[1] = Math.round(change[1] * 100) /100
      descendingCID[i][1] = Math.round(descendingCID[i][1] * 100) /100

    }

    if (change[0] !== ''){
      finalArray.push(change)
      change = ['', 0]
    } 
    i++

    while (changeNeeded >= 20 && descendingCID[i][1] > 0) {
      change[0] = 'TWENTY'
      changeNeeded -= 20
      descendingCID[i][1] -=20
      change[1] +=20
      changeNeeded = Math.round(changeNeeded * 100) /100
       change[1] = Math.round(change[1] * 100) /100
      descendingCID[i][1] = Math.round(descendingCID[i][1] * 100) /100
    }
    if (change[0] !== ''){
      finalArray.push(change)
      change = ['', 0]
    } 
    i++

    while (changeNeeded >= 10 && descendingCID[i][1] > 0) {
      change[0] = 'TEN'
      changeNeeded -= 10
      descendingCID[i][1] -=10
      change[1] +=10
      changeNeeded = Math.round(changeNeeded * 100) /100
       change[1] = Math.round(change[1] * 100) /100
      descendingCID[i][1] = Math.round(descendingCID[i][1] * 100) /100
    }

    if (change[0] !== ''){
      finalArray.push(change)
      change = ['', 0]
    } 
    i++

    while (changeNeeded >= 5 && descendingCID[i][1] > 0) {
      change[0] = 'FIVE'
      changeNeeded -= 5
      descendingCID[i][1] -= 5
      change[1] += 5
      changeNeeded = Math.round(changeNeeded * 100) /100
       change[1] = Math.round(change[1] * 100) /100
      descendingCID[i][1] = Math.round(descendingCID[i][1] * 100) /100
    }
    if (change[0] !== ''){
      finalArray.push(change)
      change = ['', 0]
    } 
    i++

    while (changeNeeded >= 1 && descendingCID[i][1] > 0) {
      change[0] = 'ONE'
      changeNeeded -= 1
      descendingCID[i][1] -= 1
      change[1] += 1
      changeNeeded = Math.round(changeNeeded * 100) /100
       change[1] = Math.round(change[1] * 100) /100
      descendingCID[i][1] = Math.round(descendingCID[i][1] * 100) /100
    }
    if (change[0] !== ''){
      finalArray.push(change)
      change = ['', 0]
    } 
    i++

    while (changeNeeded >= 0.25 && descendingCID[i][1] > 0) {
      change[0] = 'QUARTER'
      changeNeeded -= 0.25
      descendingCID[i][1] -= 0.25
      change[1] += 0.25
      changeNeeded = Math.round(changeNeeded * 100) /100
       change[1] = Math.round(change[1] * 100) /100
      descendingCID[i][1] = Math.round(descendingCID[i][1] * 100) /100
  
    }
    if (change[0] !== ''){
      finalArray.push(change)
      change = ['', 0]
    } 
    i++

    while (changeNeeded >= 0.10 && descendingCID[i][1] > 0) {
      change[0] = 'DIME'
      changeNeeded -= 0.10
      descendingCID[i][1] -= 0.10
      change[1] += 0.10
      changeNeeded = Math.round(changeNeeded * 100) /100
       change[1] = Math.round(change[1] * 100) /100
      descendingCID[i][1] = Math.round(descendingCID[i][1] * 100) /100
    }
    if (change[0] !== ''){
      finalArray.push(change)
      change = ['', 0]
    } 
    i++

    while (changeNeeded >= 0.05 && descendingCID[i][1] > 0) {
      change[0] = 'NICKEL'
      changeNeeded -= 0.05
      descendingCID[i][1] -= 0.05
      change[1] += 0.05
      changeNeeded = Math.round(changeNeeded * 100) /100
      change[1] = Math.round(change[1] * 100) /100
      descendingCID[i][1] = Math.round(descendingCID[i][1] * 100) /100
    }
    if (change[0] !== ''){
      finalArray.push(change)
      change = ['', 0]
    } 
    i++

    while (changeNeeded >= 0.01 && descendingCID[i][1] > 0) {
      change[0] = 'PENNY'
      changeNeeded -= 0.01
     change[1] += 0.01
      descendingCID[i][1] -= 0.01
      changeNeeded = Math.round(changeNeeded * 100) /100
       change[1] = Math.round(change[1] * 100) /100
      descendingCID[i][1] = Math.round(descendingCID[i][1] * 100) /100
      
      console.log(change[1])
    }
    if (change[0] !== ''){

      finalArray.push(change)
      change = ['', 0]
    } 
  let availableCash = 0
  for (let i = 0; i < descendingCID.length; i++) {
  
   availableCash += descendingCID[i][1]
  }
  console.log(finalArray)
  if (changeNeeded > 0) {
    cashRegisterObject.status = 'INSUFFICIENT_FUNDS'
  } else if (finalArray.length > 0 && availableCash === 0) {
     cashRegisterObject.change = cidCopy
     cashRegisterObject.status = 'CLOSED'
  } else {
    cashRegisterObject.change = finalArray
     cashRegisterObject.status = 'OPEN'
  }
    return cashRegisterObject
   
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
