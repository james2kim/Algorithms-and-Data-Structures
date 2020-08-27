function linearCongGenerator(r0, a, c, m, n) {
  let random  = r0
  const randomGenerator = (prevRandom) => {
    let random = (a * prevRandom + c) % m
    return random
  } 

  for (let i = 0; i < n; i++) {
    random = randomGenerator(random)
  }
  return random
}
linearCongGenerator(324, 1145, 177, 2148, 3)

