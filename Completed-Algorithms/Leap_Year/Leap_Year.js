function isLeapYear(year) {
//   If the year is divisible by 400, it is a leap year
  //  if the year is divisible by 100, the it is not a leap year
//   If the year is divisible by 4, then it is a leap year, as long as it is not divisble by 100 
//   in any other situation, it is not a leap year
  if (year % 400 === 0) {
    return true
  } else if (year % 100 === 0) {
    return false 
  } else if (year % 4 === 0) {
    return true
  } else {
    return false 
  }
}
isLeapYear(2018) 
