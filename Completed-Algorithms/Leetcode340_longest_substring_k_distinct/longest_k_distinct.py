class Solution:
    def lengthOfLongestSubstringKDistinct(self, s: str, k: int) -> int:
        best = 0
        left = 0
        seen = {}
        for right, char in enumerate(s):
            seen[char] = seen.get(char, 0) + 1
            while len(seen) > k:
                seen[s[left]] -=1
                if seen[s[left]] == 0:
                    del seen[s[left]]
                left +=1
            best = max(best, right - left + 1)
        return best
