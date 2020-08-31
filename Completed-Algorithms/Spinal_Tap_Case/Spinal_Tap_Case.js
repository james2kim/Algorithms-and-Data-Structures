function spinalCase(str) {
str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  let split = str.split(/\s+|_+/g)

  for (let i = 0;i < split.length;i++) {
    split[i] = split[i].split('')
    split[i][0] = split[i][0].toLowerCase()
    split[i] = split[i].join('')
  }
  return split.join('-')
}

spinalCase("thisIsSpinalTap")
