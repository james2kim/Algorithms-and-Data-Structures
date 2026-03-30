class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dictionary = {}
        result = []
        for i, num in enumerate(nums):
            if i!=0 and target - num in dictionary.keys():
                for k,v in dictionary.items():
                    if target - k == num:
                        result.extend([v, i])
                        break

            if not num in dictionary.keys():
                dictionary[num] = i
        
        return result
