class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda x: x[0])
        results = []
        for interval in intervals:
            if not results or interval[0] > results[-1][1]:
                results.append(interval)
            else:
                results[-1][1] = max(results[-1][1], interval[1])
        return results
