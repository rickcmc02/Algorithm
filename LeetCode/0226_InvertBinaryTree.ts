/*
Given the root of a binary tree, invert the tree, and return its root.

 

Example 1:


Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
Example 2:


Input: root = [2,1,3]
Output: [2,3,1]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root;
  function swapTree(tn: TreeNode | null) {
    if (!tn) return;
    [tn.left, tn.right] = [tn.right, tn.left];

    swapTree(tn.left);
    swapTree(tn.right);
  }

  swapTree(root);
  return root;
}
