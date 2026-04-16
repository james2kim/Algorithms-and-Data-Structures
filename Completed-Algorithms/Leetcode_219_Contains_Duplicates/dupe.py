# this problem wants us to see if any to numbers are within each other within a fixed window size. Here we will then set a start and end variable which will defiine our window. then we will loop through the fixed length, and add to item in set, if the item exists, we will return True, if we get to end of window size, we will remove the item in the set that will be out of scope for the window size
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        seen = set()
        for i, num in enumerate(nums):
            if num in seen:
                return True
            seen.add(num)
            if i >= k:
                seen.discard(nums[i-k])
        return False
            
  
        
