function binom(n, k) {

 let factorialN = 1
 let factorialK = 1
 let nMinusK = n - k
 let nMinusKFactorial = 1

 for (let i = 2; i <= n; i++) {
    factorialN *= i;
  }

  for (let i = 2; i <= k; i++) {
  factorialK *= i
}

  for (let i = 2; i <= nMinusK; i++) {
  nMinusKFactorial *= i
}

let binomialCoefficient = factorialN / (nMinusKFactorial * factorialK)
return binomialCoefficient
}
binom(5,3)
