class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        if not image or image[sr][sc] == color:
            return image
        rows  = len(image)
        cols = len(image[0])
        existing_color = image[sr][sc]
        directions = [
            (1,0),
            (-1, 0),
            (0, 1),
            (0, -1)
        ]
        def bfs(start_row: int, start_col: int):
            queue = []
            queue.append((start_row, start_col))
            image[start_row][start_col] = color

            while queue:
                row, col = queue.pop(0)
                for row_delta, col_delta in directions:
                    new_row = row + row_delta
                    new_col = col + col_delta
                    in_bounds = (
                        0 <= new_row < rows and
                        0 <= new_col < cols
                    )
                    if in_bounds and image[new_row][new_col] == existing_color:
                        image[new_row][new_col] = color
                        queue.append((new_row, new_col))
        bfs(sr, sc)
        return image

        
