function checkCashRegister(price, cash, cid) {
  let changeRequired = (cash - price).toFixed(2);
  const currencyDictionary = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.1,
    "NICKEL": 0.5,
    "PENNY": 0.01,
  }
  const change = [];
  const cidSorted = [...cid].reverse()
  const amountInRegister = cid.map((item) => item[1]).reduce((a,b) => a + b)
  if (amountInRegister < changeRequired) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } else if (amountInRegister.toFixed(2) === changeRequired) {
    return {status: "CLOSED", change: cid}
  } else {
    cidSorted.forEach((curID) => {
    let currencyAmount
    if (currencyDictionary[curID[0]] <= changeRequired && curID[1] > 0) {
        currencyAmount = [curID[0], 0]
    }

    while (currencyDictionary[curID[0]] <= changeRequired && curID[1] > 0) {
      currencyAmount[1] += currencyDictionary[curID[0]]
      curID[1] -= currencyDictionary[curID[0]]
      changeRequired -= currencyDictionary[curID[0]]
      changeRequired = changeRequired.toFixed(2)
          if (changeRequired === 0) {
            break;
          }
    }
    if (currencyAmount) {
      change.push(currencyAmount)
    }
  })
  if (changeRequired > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
    return {status: "OPEN", change}
  }
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
