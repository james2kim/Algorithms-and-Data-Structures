# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root:
            return False
        def dfs(node, targetSum):
            if not node:
                return False
            targetSum -= node.val
            if node.left == None and node.right == None:
                return targetSum == 0
            return dfs(node.left, targetSum) or dfs(node.right, targetSum)
        return dfs(root, targetSum)
            
