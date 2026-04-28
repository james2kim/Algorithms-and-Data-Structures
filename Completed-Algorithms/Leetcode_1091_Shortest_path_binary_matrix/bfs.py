from collections import deque
class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        n = len(grid)
        if grid[0][0] != 0 or grid[n - 1][n - 1] != 0:
            return -1
        rows = len(grid)
        cols = len(grid[0])
        directions = [
            (1, 0),
            (-1, 0),
            (0, 1),
            (0, -1),
            (1, 1),
            (1, -1),
            (-1, 1),
            (-1, -1),
        ]
        queue = deque([(0,0,1)])
        grid[0][0] = 1
        while queue:
            row, col, distance = queue.popleft()
            if row == n - 1 and col == n - 1:
                return distance
            for row_delta, col_delta in directions:
                new_row = row + row_delta
                new_col = col + col_delta
                in_bounds = (
                    0 <= new_row < rows and
                    0 <= new_col < cols
                )
                if in_bounds and grid[new_row][new_col] == 0:
                    queue.append((new_row, new_col, distance + 1))
                    grid[new_row][new_col] = 1
        return -1
                
 


        
