function eth_mult(a, b) {
  let first = a
  let second = b
  let firstColumn = []
  let secondColumn = []
  const methods = {
    halfInteger(x) { return Math.floor (x / 2)},
    doubleInteger(x) { return x * 2},
    isEven(x) { return x % 2 === 0 ? true:false},
    pushValue(array,value) {array.push(value)
    }
  }
  methods.pushValue (firstColumn,first)
  methods.pushValue (secondColumn,second)
  while (first > 1) {
    first = methods.halfInteger (first)
    second = methods.doubleInteger (second)
    methods.pushValue (firstColumn,first)
    methods.pushValue (secondColumn,second)
  }

  for (let i = 0;i < firstColumn.length; i++) {
    if (methods.isEven(firstColumn[i])) {
    secondColumn[i] = 0
  }
}
 const ethiopianMultiplication = secondColumn.reduce((a,b) => {return a+b})  
 return ethiopianMultiplication

}
eth_mult(17,34)
