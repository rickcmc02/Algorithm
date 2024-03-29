/*
Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.

 

Example 1:


Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]
Example 2:

Input: root = [1]
Output: ["1"]
 

Constraints:

The number of nodes in the tree is in the range [1, 100].
-100 <= Node.val <= 100
*/

function binaryTreePaths(root: TreeNode | null): string[] {
  const pathList: string[] = [];
  if (!root) return pathList;

  function pathBuilder(tn: TreeNode, accPath: string) {
    const addedPath = accPath ? `${accPath}->${tn.val}` : `${tn.val}`;
    if (tn.left) pathBuilder(tn.left, addedPath);
    if (tn.right) pathBuilder(tn.right, addedPath);
    if (!tn.left && !tn.right) pathList.push(addedPath);
  }
  pathBuilder(root, "");

  return pathList;
}
