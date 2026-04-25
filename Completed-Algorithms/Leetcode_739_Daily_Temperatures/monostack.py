class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        answer = [0] * len(temperatures)
        stack = []

        for index, t in enumerate(temperatures):
            while stack and t > temperatures[stack[-1]]:
                old_index = stack.pop()
                answer[old_index] = index - old_index
            stack.append(index)
        return answer
