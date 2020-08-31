function pairElement(str) {
let pairElement = []

// For each case, we will push onto the pair element array the value and its pair in a new array
for (let i = 0; i < str.length; i++) {
  if (str[i] === 'A') {
    pairElement.push([str[i], 'T'])
  } else if (str[i] === 'T') {
    pairElement.push([str[i], 'A'])
  } else if (str[i] === 'C') {
    pairElement.push([str[i], 'G'])
  } else if (str[i] === 'G') {
    pairElement.push([str[i], 'C'])
  }
}
return pairElement
}

pairElement("GCG");
