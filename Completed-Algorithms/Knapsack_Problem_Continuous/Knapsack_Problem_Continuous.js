function knapContinuous(items, maxweight) {
  let maxValue = 0

// Add Optimal Key/Value pair to each object in items array
  for (let i = 0 ;i < items.length; i++) {
    items[i].optimal = +(items[i].value/items[i].weight)
  }

// Sort the items from greatest optimal value to lowest optimal value
  const sorted = items.sort((a,b) => {
      const keyA = a.optimal
      const keyB = b.optimal
      if (keyA > keyB) return -1;
      if (keyA < keyB) return 1;
      return 0;
  })

// Loop through the sorted array and increment maxValue by the values possible until no more weight is available, then return max value
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i].weight < maxweight) {
      maxValue += sorted[i].value
      maxweight -=sorted[i].weight
  
    } else if (sorted[i].weight > maxweight && maxweight > 0) {
      maxValue += (maxweight * sorted[i].optimal)
     return maxValue
    }
  }
}

knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 10)
