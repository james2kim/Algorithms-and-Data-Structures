"""
# Definition for a Node.
class Node:
    def __init__(self, val: Optional[int] = None, children: Optional[List['Node']] = None):
        self.val = val
        self.children = children if children is not None else []
"""

class Solution:
    def cloneTree(self, root: 'Node') -> 'Node':
        if not root:
            return root
        def dfs(node):
            if not node:
                return node
            node_copy = Node(node.val)
            for c in node.children:
                node_copy.children.append(dfs(c))
            return node_copy
        return dfs(root) 
            
