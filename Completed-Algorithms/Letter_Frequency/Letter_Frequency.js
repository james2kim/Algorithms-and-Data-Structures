function letterFrequency(txt) {
 let array = []
 let freq = 0
  for (let i = 0;i < txt.length; i++) {
     if (!array.includes(txt[i])){
       array.push(txt[i])
    }
  }
let freqArray=array.map(char=>{
  return [char,freq]
})
for (let i = 0;i < freqArray.length; i++) {
  for (let j = 0;j < txt.length; j++) {
    if(txt[j] === freqArray[i][0]) {
      freqArray[i][1]++
      }
    }
 }
return freqArray
}
letterFrequency("Not all that Mrs. Bennet, however")
