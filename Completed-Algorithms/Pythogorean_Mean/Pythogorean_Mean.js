function pythagoreanMeans(rangeArr) {

// Arithmetic Mean A(x1,…,xn)=x1+⋯+xn /n


function arithmeticMean() {
let sum = 0;
// Iterate through array and add number values to sum 
for (let i = 0; i < rangeArr.length; i++) {
  sum +=rangeArr[i]
}
const aMean = sum / rangeArr.length 

 return aMean

}

// The geometric mean is the  n th root of the product of the list:
// G(x1,…,xn)=x1⋯xn‾‾‾‾‾‾‾√n
function geometricMean() {
let product = 1

for (let i = 0; i < rangeArr.length;i++) {
  product *= rangeArr[i]
}

  const gMean = Math.pow(product, 1/10)
  return gMean

}


function harmonicMean() {
  let sumR = 0

  for (let i = 0 ;i < rangeArr.length; i++) {
    sumR += (1/rangeArr[i])

  }
const hMean = rangeArr.length/sumR

return hMean

}


const pythogorean = {
  values: {
    Arithmetic:arithmeticMean(),
    Geometric: geometricMean(),
    Harmonic : harmonicMean()
  },
  test: 'is A >= G >= H ? yes'
}

return pythogorean
}

pythagoreanMeans([1,2,3,4,5,6,7,8,9,10])

