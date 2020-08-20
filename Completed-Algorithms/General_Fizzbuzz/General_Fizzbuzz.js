function genFizzBuzz(rules, num) {
  let string = ""
    for (let i = 0;i < rules.length; i++) {
      num % rules[i][0] === 0 ? string += rules[i][1]:""
  }
    if (string===""){
      return num
    } else {
      return string
    }
}
genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 10)
