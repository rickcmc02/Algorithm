/*
Given a binary tree, determine if it is 
height-balanced
.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: true
Example 2:


Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
Example 3:

Input: root = []
Output: true
 

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-104 <= Node.val <= 104
*/

function checkRootDepth(tree: TreeNode | null, depth: number): number {
  if (!tree) return depth - 1;
  const leftDepth = checkRootDepth(tree.left, depth + 1);
  const rightDepth = checkRootDepth(tree.right, depth + 1);

  if (leftDepth && rightDepth) {
    const diff = leftDepth - rightDepth;
    if (diff > 1 || diff < -1) return 0;
    else {
      if (leftDepth > rightDepth) return leftDepth;
      else return rightDepth;
    }
  } else return 0;
}

function isBalanced(root: TreeNode | null): boolean {
  if (!root || root.val === null) return true;
  return !!checkRootDepth(root, 1);
}
