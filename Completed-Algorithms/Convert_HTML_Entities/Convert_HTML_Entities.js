function convertHTML(str) {
  let splitStr = str.split('')
 
  splitStr = splitStr.map(char => {
    if (char === '&') {
      return char = '&amp;'
    } else if (char === '<') {
        return char = '&lt;'
    } else if (char === '>') {
        return char = '&gt;'
    } else if (char === '"') {
        return char = '&quot;'
    } else if (char === "'") {
        return char = '&apos;'
    } else {
        return char
    }
  })

  const htmlEntities = splitStr.join('')
  return htmlEntities
}

convertHTML("Dolce & Gabbana");
