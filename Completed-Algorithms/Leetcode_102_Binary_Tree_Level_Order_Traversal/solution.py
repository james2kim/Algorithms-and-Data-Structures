class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        visited = [root]
        result = []
        while len(visited) > 0:
            level = []
            for _ in range(len(visited)):
                node = visited.pop(0)
                if node.left:
                    visited.append(node.left)
                if node.right:
                    visited.append(node.right)
                level.append(node.val)
            result.append(level)
        return result

