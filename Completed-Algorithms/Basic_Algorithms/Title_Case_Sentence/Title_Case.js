function titleCase(str) {
  const lowerCase = str.toLowerCase()
  const splitStr = lowerCase.split(' ')

  for (let i = 0; i < splitStr.length; i++) {
    let temp = splitStr[i].split('')
    temp[0] = temp[0].toUpperCase()
    splitStr[i] = temp.join('')
  }
  const titleCase = splitStr.join(' ')
  return titleCase
}
titleCase("I'm a little tea pot");
