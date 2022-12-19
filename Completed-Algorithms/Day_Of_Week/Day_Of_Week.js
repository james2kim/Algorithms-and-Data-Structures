function findXmasSunday(start, end) {
  const christmasString = 'December 25'
  const yearsArr = [];
  for (let i = start; i <= end; i++) {
    const date = new Date(`${christmasString}, ${i}`)
    const dayOfWeek = date.getDay()
    if (dayOfWeek === 0) {
      yearsArr.push(i)
    }
  }
  return yearsArr
}

findXmasSunday(1970, 2017)
