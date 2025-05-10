/*
Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

 

Example 1:


Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.
Example 2:

Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
Output: 2
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-105 <= Node.val <= 105
*/

function maxLevelSum(root: TreeNode | null): number {
  if (!root) return 0;

  const levelSumData: {[key in number]: number} = {}; // level별 합계액 저장
  
  const searchNodes = (tn: TreeNode, level: number): void => {
      if (levelSumData[level]) levelSumData[level] += tn.val;
      else levelSumData[level] = tn.val;

      if (tn.left) searchNodes(tn.left, level + 1);
      if (tn.right) searchNodes(tn.right, level + 1);
  }

  searchNodes(root, 1);

  const sumValues = Object.values(levelSumData);
  let [maxIdx, maxVal] = [-1, -Infinity]; // 전체 node val이 음수일수도 있음
  for (let i = 0; i < sumValues.length; i++) {
      const sumVal = sumValues[i];
      if (sumVal > maxVal) {
          maxVal = sumVal;
          maxIdx = i;
      }
  }

  return maxIdx + 1;
};