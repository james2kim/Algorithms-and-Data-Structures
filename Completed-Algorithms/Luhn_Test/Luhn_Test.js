function luhnTest(str) {
// Reverse the string of numbers and initalize the first number in array to s1 because index 0 is technically the first number, which is odd. 
  const reverse = str.split('').reverse()
  let s1 = parseInt(reverse[0])
  let s2 = 0


// Helper function to add digits of a number if neccesary 
  const addDigitsOfLongStringNum = (number) => {
    const stringSplitNum = number.toString().split('')
    let sum = 0
    for (let i = 0; i < stringSplitNum.length;i++) 
      {
        sum += parseInt(stringSplitNum[i])
      }
    return sum
  }

// Loop through string of numbers. if the count is even, we will double the value, if the value is over 9, we will run it through the helper function and add the digits of num to s2 value. If the count is odd, we will add those numbers as default to s1 value. 
  for (let i = 1; i < reverse.length; i++) 
    {
    if (i % 2 === 1) 
      {
        const doubleEven = (2 * parseInt(reverse[i]))
      // We need a check inside the even condition on whether the number is > 9
        if (doubleEven > 9) 
          {
            s2 += addDigitsOfLongStringNum(doubleEven)
          }  
        else 
          {
            s2 += doubleEven
          }
      } 
    else 
      {
        s1 += +reverse[i]
      }
    }

// The luhn test holds true if the last digit of the luhn number is 0
  const luhnNum = (s1+s2).toString()
  const luhnTest = parseInt(luhnNum[luhnNum.length - 1]) === 0 ? true : false
  return luhnTest

}

luhnTest("49927398716")

