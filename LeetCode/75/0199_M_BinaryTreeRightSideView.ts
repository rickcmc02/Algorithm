/*

Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 

Example 1:

Input: root = [1,2,3,null,5,null,4]

Output: [1,3,4]

Explanation:



Example 2:

Input: root = [1,2,3,4,null,null,null,5]

Output: [1,3,4,5]

Explanation:



Example 3:

Input: root = [1,null,3]

Output: [1,3]

Example 4:

Input: root = []

Output: []

 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

*/

// 후위순회 해서 숫자 채우기

function rightSideView(root: TreeNode | null): number[] {
  const floorNumData: {[key in number]: number} = {};

  const searchNodes = (tn: TreeNode | null, floor: number): void => {
      if (!tn || (!tn.val && tn.val !== 0)) return
      if (!floorNumData[floor] && floorNumData[floor] !== 0) floorNumData[floor] = tn.val;
      searchNodes(tn.right, floor + 1);
      searchNodes(tn.left, floor + 1);
  }

  searchNodes(root, 1);

  return Object.values(floorNumData)
};