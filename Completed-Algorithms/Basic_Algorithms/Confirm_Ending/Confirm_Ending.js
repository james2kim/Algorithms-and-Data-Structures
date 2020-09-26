function confirmEnding(str, target) {
  let confirmed = ''
  for (let i = str.length - target.length; i < str.length; i++) {
    confirmed += str[i]
  }
  return confirmed === target ? true : false
}

confirmEnding("Congratulation", "on")
