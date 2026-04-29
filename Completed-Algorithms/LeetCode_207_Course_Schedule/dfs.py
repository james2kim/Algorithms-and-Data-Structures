class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        graph = {i: [] for i in range(numCourses)}
        for a,b in prerequisites:
            graph[b].append(a)
        visiting = set()
        visited = set()
        def dfs(course):
            if course in visiting:
                return False
            if course in visited:
                return True
            visiting.add(course)
            for nei in graph[course]:
                if not dfs(nei):
                    return False
            visiting.remove(course)
            visited.add(course)
            return True
        for n in range(numCourses):
            if not dfs(n):
                return False
        return True
