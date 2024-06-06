/*
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

Example 1:


Input: root = [1,2,2,3,4,4,3]
Output: true
Example 2:


Input: root = [1,2,2,null,3,null,3]
Output: false
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100
 

Follow up: Could you solve it both recursively and iteratively?
*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function compareSection(
  sectionA: TreeNode | null,
  sectionB: TreeNode | null
): boolean {
  if (sectionA === null && sectionB === null) return true;
  if (!(sectionA && sectionB)) return false;

  if (sectionA.val === sectionB.val) {
    return (
      compareSection(sectionA.left, sectionB.right) &&
      compareSection(sectionA.right, sectionB.left)
    );
  } else return false;
}

function isSymmetric(root: TreeNode): boolean {
  return (
    compareSection(root.left, root.right) &&
    compareSection(root.right, root.left)
  );
}
