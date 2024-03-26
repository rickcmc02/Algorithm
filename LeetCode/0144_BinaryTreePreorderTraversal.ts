/*
Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [1,2,3]
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

let potnList: number[] = [];

function searchPreorder(tn: TreeNode | null): void {
  if (!tn) return;
  potnList.push(tn.val);
  if (tn.left) searchPreorder(tn.left);
  if (tn.right) searchPreorder(tn.right);
}

function preorderTraversal(root: TreeNode | null): number[] {
  potnList = [];
  searchPreorder(root);
  return potnList;
}
