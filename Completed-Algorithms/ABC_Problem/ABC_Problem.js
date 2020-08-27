function canMakeWord(word) {
  let realWord=word.toUpperCase()
  let reverseWord=realWord.split('').reverse()
  console.log(realWord)
  let alphabet={
    0:['B','O'],
    1:['X','K'],
    2:['D','Q'],
    3:['C','P'],
    4:['N','A'],
    5:['G','T'],
    6:['R','E'],
    7:['T','G'],
    8:['Q','D'],
    9:['F','S'],
    10:['J','W'],
    11:['H','U'],
    12:['V','I'],
    13:['A','N'],
    14:['O','B'],
    15:['E','R'],
    16:['F','S'],
    17:['L','Y'],
    18:['P','C'],
    19:['Z','M']
  }
let blocks;
let increment=0
  for (let i=increment;i<realWord.length;i++){
    blocks=Object.values(alphabet)
      for (let j=0;j<blocks.length;j++){
       if(blocks[j].includes(realWord[i])){
         reverseWord.pop()
         alphabet[j]=[]
         blocks=Object.values(alphabet)
         i++
         j=0
       }
      } 
  }
    if(reverseWord.length===0){
      return true
    } else{
      return false 
    }
}
canMakeWord("confuse")
