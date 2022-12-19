function findXmasSunday(start, end) {
  const yearsArr = [];
  for (let i = start; i <= end; i++) {
    const date = new Date(`December 25, ${i}`)
    const dayOfWeek = date.getDay()
    if (dayOfWeek === 0) {
      yearsArr.push(i)
    }
  }
  return yearsArr
}

findXmasSunday(1970, 2017)
