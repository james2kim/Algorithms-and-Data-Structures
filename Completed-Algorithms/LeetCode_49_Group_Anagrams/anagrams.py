class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        dictionary = {}
        for str in strs:
            sortedStr = "".join(sorted(str))
            if sortedStr not in dictionary:
                dictionary[sortedStr] = [str]
            else:
                dictionary[sortedStr].append(str)
        return list(dictionary.values())
        
