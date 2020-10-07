function gray(enc, number) {
// If enc is true, then we must return the one bit position of the number and sign right shift by one 
if (enc) 
  {
   return number ^ (number >> 1)
  } 
// If enc is false, then we must set each bit to 1 only if 1 of the 2 numbers has a 1 when comparing side by side. 
else 
  {
    let num = number
      while (number >>= 1) {
          num ^= number
      }

    return num
  }
}
gray(false,233)
