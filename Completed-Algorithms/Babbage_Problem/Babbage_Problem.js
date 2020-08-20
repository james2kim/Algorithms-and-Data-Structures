function babbage(babbageNum, endDigits) {
let endDigitString = endDigits.toString()
let babbage = 0;
  for (let i = 500;i < babbageNum; i++) {
    let stringNum = Math.pow (i,2).toString ()
    let sliced = stringNum.slice (stringNum.length - 6,stringNum.length)
    if (sliced === endDigitString){
    return i
     }
  }
}

babbage(99736, 269696)
