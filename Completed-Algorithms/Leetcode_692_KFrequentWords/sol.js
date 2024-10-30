/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const dictionary = {}

    words.forEach(word => {
        if(!dictionary[word]) {
            dictionary[word] = {
                name: word,
                count: 1
            }
        } else {
            const {count, name} = dictionary[word]
            dictionary[word] = {
                name: word,
                count: count + 1
            }
        }
    })
    const sorted = Object.values(dictionary).sort((a,b) => {
        if(b.count !== a.count) {
            return  b.count - a.count
        }
        return a.name.localeCompare(b.name)
    })
    return sorted.slice(0,k).map(item => item.name)

};
