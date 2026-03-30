class Solution:
    def search(self, nums: List[int], target: int) -> int:
        middle = len(nums) // 2
        start = 0
        end = len(nums) - 1
        while end >= start: 
            print(start, end, middle)
            if nums[middle] == target:
                return middle
            elif target < nums[middle]:
                end = middle - 1
            else: 
                start = middle + 1
            middle = (start + end) // 2 
            
        return -1
        
