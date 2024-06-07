/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2
 

Constraints:

The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
*/

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function digger(node: TreeNode | null, depth: number): number {
  if (!node) return depth;
  const leftDepth = digger(node.left, depth + 1);
  const rightDepth = digger(node.right, depth + 1);
  if (leftDepth > rightDepth) return leftDepth;
  else return rightDepth;
}

function maxDepth(root: TreeNode | null): number {
  return digger(root, 0);
}
