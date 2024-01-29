/*
Given an integer array nums where the elements are sorted in ascending order, convert it to a 
height-balanced
 binary search tree.

 

Example 1:


Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:


Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
*/

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  let bst: TreeNode = { left: null, val: 0, right: null };
  const numsLen = nums.length;

  let halfIdx: number;
  if (numsLen % 2) {
    halfIdx = numsLen / 2 - 0.5;
  } else {
    halfIdx = numsLen / 2 - 1;
  }

  bst.val = nums[halfIdx];
  if (halfIdx === 0) bst.left = null;
  else bst.left = sortedArrayToBST(nums.slice(0, halfIdx));
  if (halfIdx === numsLen - 1) bst.right = null;
  else bst.right = sortedArrayToBST(nums.slice(halfIdx + 1));

  return bst;
}
