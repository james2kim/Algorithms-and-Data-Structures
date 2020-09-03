function largeSum(arr) {
  let numbersArray=[]
  let sum=0

  for (let i = 0;i < arr.length; i++) {
    numbersArray.push(parseInt(arr[i]))
  }

  for(let i = 0;i < numbersArray.length; i++){
    sum += numbersArray [i]
  }

  sum = sum.toString()
  sum = sum.replace('.','');
  const answer = parseInt (sum.slice (0,10) )
  return answer
}


// only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

largeSum(testNums);
