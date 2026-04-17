
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
       best = 0
       left = 0
       seen = {}
       for right, char in enumerate(s):
        if char in seen and seen[char] >= left:
            left = seen[char] + 1
        seen[char] = right
        best = max(best, right - left + 1)
       return best

    
