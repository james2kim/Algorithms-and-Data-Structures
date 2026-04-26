class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if not grid:
            return 0
        rows = len(grid)
        cols = len(grid[0])
        islands = 0
        directions = [
            (1, 0),
            (-1, 0),
            (0, 1),
            (0, -1)
        ]
        def bfs(start_row: int, start_col: int):
            queue = []
            queue.append((start_row, start_col))
            grid[start_row][start_col] = '0'
            while queue:
                row, col = queue.pop(0)
                for row_delta, col_delta in directions:
                    new_row = row + row_delta
                    new_col = col + col_delta

                    in_bounds = (
                        0 <= new_row < rows and
                        0 <= new_col < cols
                    )
                    if in_bounds and grid[new_row][new_col] == '1':
                        grid[new_row][new_col] = '0'
                        queue.append((new_row, new_col))
        for row in range(rows):
            for col in range(cols):
                if grid[row][col] == '1':
                    islands += 1
                    bfs(row, col)
        return islands
