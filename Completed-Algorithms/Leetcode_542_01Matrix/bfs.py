from collections import deque
class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        rows = len(mat)
        cols = len(mat[0])
        directions = [
            (1, 0),
            (-1, 0),
            (0, 1),
            (0, -1)
        ]
        queue = deque()
        for row in range(rows):
            for col in range(cols):
                if mat[row][col] == 0:
                    queue.append((row, col))
                elif mat[row][col] == 1:
                    mat[row][col] = -1
        while queue:
            row, col = queue.popleft()
            for row_delta, col_delta in directions:
                new_row = row + row_delta
                new_col = col + col_delta
                in_bounds = (
                    0 <= new_row < rows and
                    0 <= new_col < cols
                )
                if in_bounds and mat[new_row][new_col] == -1:
                    mat[new_row][new_col] = mat[row][col] + 1
                    queue.append((new_row, new_col))
        return mat
        
