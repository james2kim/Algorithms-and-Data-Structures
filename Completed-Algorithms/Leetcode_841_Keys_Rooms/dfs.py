class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        graph = {i: [] for i in range(len(rooms))}
        for i, keys in enumerate(rooms):
            for key in keys:
                graph[i].append(key)
        visited = set()
        def dfs(room):
            if room in visited:
                return
            visited.add(room)
            for nei in graph[room]:
                dfs(nei)
        dfs(0)
        return len(visited) == len(rooms)

        
