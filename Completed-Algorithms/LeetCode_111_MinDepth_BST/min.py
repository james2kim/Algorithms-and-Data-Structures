# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        visited = [root]
        result = 0
        while len(visited) > 0:
            result += 1
            for _ in range(len(visited)):
                node = visited.pop(0)
                if not node.left and not node.right:
                    return result
                if node.left:
                    visited.append(node.left)
                if node.right:
                    visited.append(node.right)
        return result

        
        
