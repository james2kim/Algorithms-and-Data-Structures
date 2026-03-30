class Solution:
    def isPalindrome(self, s: str) -> bool:
        clean = "".join(c.lower() for c in s if c.isalnum())

        start = 0
        end = len(clean) - 1

        while end >= start:
            if clean[start] != clean[end]:
                return False
            start += 1
            end -= 1
        return True

