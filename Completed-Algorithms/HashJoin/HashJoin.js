
function hashJoin(hash1, hash2) {
let firstHash = []
let hashedArray = []

const hashFunction1 = (age,name) => {
  return {
    "A_age":age,
    "A_name":name
  }
}

const hashFunction2 = (character,nemesis) => {
  return {
    "B_character":character,
    "B_nemesis":nemesis
  }
}


for (let i = 0; i < hash1.length; i++) 
   {
    firstHash.push(hashFunction1(hash1[i].age, hash1[i].name))
      for (let j = 0; j < hash2.length ; j++) {
        if (hash2[j].character === firstHash[i]["A_name"]) {
          const secondHash = hashFunction2(hash2[j].character, hash2[j].nemesis)
          hashedArray.push({...firstHash[i], ...secondHash})
        }
      }
   }

return hashedArray

}
hashJoin([{ age: 27, name: "Jonah" }, { age: 18, name: "Alan" }, { age: 28, name: "Glory" }, { age: 18, name: "Popeye" }, { age: 28, name: "Alan" }], [{ character: "Jonah", nemesis: "Whales" }, { character: "Jonah", nemesis: "Spiders" }, { character: "Alan", nemesis: "Ghosts" }, { character:"Alan", nemesis: "Zombies" }, { character: "Glory", nemesis: "Buffy" }, { character: "Bob", nemesis: "foo" }])
