class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        validParenth = {
            "{": "}",
            "[": "]",
            "(": ")"
        }
        for char in s:
            if char in {"{", "(","["}:
                stack.extend(char)
            elif char in {"}", ")", "]"}:
                if not stack:
                    return False
                last = stack[len(stack) - 1]
                if validParenth[last] != char:
                    return False
                stack.pop()

        return True if len(stack) == 0 else False
