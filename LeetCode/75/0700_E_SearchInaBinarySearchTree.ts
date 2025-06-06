/*

You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

 

Example 1:


Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]
Example 2:


Input: root = [4,2,7,1,3], val = 5
Output: []
 

Constraints:

The number of nodes in the tree is in the range [1, 5000].
1 <= Node.val <= 107
root is a binary search tree.
1 <= val <= 107

*/

// Answer 2

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  let isFound = false;

  const findEqualVal = (tn: TreeNode | null) => {
      if (!tn) return null;
      if (isFound) return null;
      if (tn.val === val) {
          isFound = true;
          return tn;
      }
      const [tnLeft, tnRight] = [findEqualVal(tn.left), findEqualVal(tn.right)];
      if (tnLeft) return tnLeft;
      if (tnRight) return tnRight;
      return null;
  }

  return findEqualVal(root);
};

// Answer 1

// function searchBST(root: TreeNode | null, val: number): TreeNode | null {
//   const findEqualVal = (tn: TreeNode | null) => {
//       if (!tn) return null;
//       if (tn.val === val) return tn;
//       const [tnLeft, tnRight] = [findEqualVal(tn.left), findEqualVal(tn.right)];
//       if (tnLeft) return tnLeft;
//       if (tnRight) return tnRight;
//       return null;
//   }

//   return findEqualVal(root);
// };