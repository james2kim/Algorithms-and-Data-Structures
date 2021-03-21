const palindromeOfAnagrams = string => {
    let hashmap = {}
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if (!hashmap.hasOwnProperty(string[i])) hashmap[string[i]] = 1
        else hashmap[string[i]]++
    }
    console.log(hashmap)

    for (let key in hashmap) {
        if (hashmap[key] % 2 === 1) count ++
    }
    return count > 1 ? false : true
}

palindromeOfAnagrams('racecar')
