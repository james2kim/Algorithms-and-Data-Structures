class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dictionary = {}
        for i, num in enumerate(nums):
            if target - num in dictionary:
                return[dictionary[target - num], i]
            if not num in dictionary:
                dictionary[num] = i
    

        
