/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

// trial 2 240511
/*
속도 개선
for문 한바퀴만 돌고, diff에 해당하는 값이 이미 저장되어 있고, 그 값이 현재 인덱스와 합했을 때 target이 되면 바로 리턴
diffIdx는 0일수도 있기 때문에, diffIdx + 1로 체크
*/

function twoSum(nums: number[], target: number): number[] {
  const numIdxDict: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    const diffIdx = numIdxDict[diff];
    if (diffIdx + 1) return [i, numIdxDict[diff]];
    numIdxDict[num] = i;
  }

  return [];
}

// trial 1

// const twoSum = function(nums, target) {
//   const numsLen = nums.length;
//   let index = 0;
//   let answer;
//   for (const num of nums) {
//       const diff = target - num;
//       for (let i = index + 1; i < numsLen; i++) {
//           if (diff === nums[i]) {
//               answer = [index, i];
//               break;
//           }
//       }
//       if (answer) break;
//       index++;
//   }
//   return answer;
// };
