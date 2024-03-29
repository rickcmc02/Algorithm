/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

let nodeValues: number[];

function checkNodeValues(tree: TreeNode | null): void {
  if (!tree) return;
  if (tree.left) checkNodeValues(tree.left);
  if (!isNaN(tree.val)) nodeValues.push(tree.val);
  if (tree.right) checkNodeValues(tree.right);
}

function inorderTraversal(root: TreeNode | null): number[] {
  nodeValues = [];
  checkNodeValues(root);
  return nodeValues;
}
