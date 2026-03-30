class Solution:
    def isPalindrome(self, x: int) -> bool:
        strNum = str(x)
        k = len(strNum) - 1
        i = 0
        while k > i:
            if strNum[i] != strNum[k]: 
                return False
            i+=1
            k-=1
        return True
        
