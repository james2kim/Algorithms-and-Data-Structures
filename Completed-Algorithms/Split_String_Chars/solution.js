function split(str) {
  let stack = [str[0]]
  let temp = ''
  let final = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== stack[0]) {
      final.push(temp)
      stack.pop()
      stack.push(str[i])
      temp = ''
    } 
    if (stack[0] === str[i]) temp+=str[i]
  }
  final.push(temp)
  return final
}

split("gHHH5YY++///\\")
