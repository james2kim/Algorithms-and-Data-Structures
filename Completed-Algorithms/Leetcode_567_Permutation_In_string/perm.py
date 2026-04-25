# brute force
class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        sorted_s1 = "".join(sorted(s1))
        right = len(s1)
        left = 0
        while right <= len(s2):
            if sorted_s1 == "".join(sorted(s2[left:right])):
                return True
            right +=1
            left +=1
        return False

