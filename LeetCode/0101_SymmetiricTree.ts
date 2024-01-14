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

function isSymmetric(root: TreeNode | null): boolean {
  return true;
}

// console.log(rootLen);

// if (!rootLen) return false;
// else if (rootLen === 1) return true;

// let lumpSize: number = 1;
// let lumpA: (number | null)[] = [];
// let isSymmetric = true;
// let isFullA = false;
// let aIdx = 0;
// let idx = 1;

// while (idx < rootLen) {
//   const nodeVal = root[idx];

//   if (!isFullA) {
//     lumpA.push(nodeVal);
//     aIdx++;
//     isSymmetric = false;

//     console.log(aIdx, lumpSize, "lumpSize");

//     if (aIdx === lumpSize) isFullA = true;
//   } else {
//     aIdx--;
//     console.log(lumpA[aIdx], nodeVal);
//     if (lumpA[aIdx] !== nodeVal) break;

//     if (aIdx === 0) {
//       lumpA = [];
//       isFullA = false;
//       isSymmetric = true;
//       lumpSize *= 2;
//     }
//   }

//   idx++;
// }

//   return isSymmetric;
// }
