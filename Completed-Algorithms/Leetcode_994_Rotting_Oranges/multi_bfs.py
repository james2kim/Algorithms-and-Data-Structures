from collections import deque
class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        fresh = 0
        queue = deque()
        directions = [
            (1, 0),
            (-1, 0),
            (0 ,1),
            (0, -1)
        ]
        for row in range(rows):
            for col in range(cols):
                if grid[row][col] == 2:
                    queue.append((row, col, 0))
                elif grid[row][col] == 1:
                    fresh += 1
        minutes = 0
        while queue:
            row, col, time = queue.popleft()
            minutes = max(minutes, time)
            for row_delta, col_delta in directions:
                new_row = row + row_delta
                new_col = col + col_delta
                in_bounds = (
                    0 <= new_row < rows and
                    0 <= new_col < cols
                )
                if in_bounds and grid[new_row][new_col] == 1:
                    fresh -=1
                    queue.append((new_row, new_col, time + 1))
                    grid[new_row][new_col] = 2
        return minutes if fresh == 0 else -1
