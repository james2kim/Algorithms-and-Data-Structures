function sumDigits(n) {
let lowerCaseString = n.replace(/[^0-9a-z]/gi, '').toLowerCase();
let sum = 0
for(var i = 0;i < lowerCaseString.length; i++) {
  sum += parseInt(lowerCaseString[i], 36)
}
return sum
}
sumDigits("999ABCXYZ")
