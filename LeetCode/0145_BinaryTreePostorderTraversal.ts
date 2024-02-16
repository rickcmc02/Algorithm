/*
Given the root of a binary tree, return the postorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [3,2,1]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
 

Constraints:

The number of the nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

*/

let pstnList: number[] = [];

function searchPostorder(tn: TreeNode | null): void {
  if (!tn) return;
  if (tn.left) searchPostorder(tn.left);
  if (tn.right) searchPostorder(tn.right);
  pstnList.push(tn.val);
}

function postorderTraversal(root: TreeNode | null): number[] {
  pstnList = [];
  searchPostorder(root);
  return pstnList;
}
