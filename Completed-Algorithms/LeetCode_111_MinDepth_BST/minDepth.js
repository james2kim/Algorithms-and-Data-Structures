/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return 0
    if (root.left === null && root.right === null) return 1
    if (root.left === null) return minDepth(root.right) + 1
    if (root.right === null) return minDepth(root.left) + 1
    
    const lHeight = minDepth(root.left)
    const rHeight = minDepth(root.right)
    
    return Math.min(lHeight, rHeight) + 1
};
