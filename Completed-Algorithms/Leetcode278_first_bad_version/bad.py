# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        start = 1
        end = n
        middle = (start + end) // 2
        while start < end:
            is_bad = isBadVersion(middle)
            if is_bad:
                end = middle
            else:
                start = middle + 1
            middle = (start + end) // 2
        return start

            
