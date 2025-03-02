/*
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
0 <= k <= nums.length
*/

function longestOnes(nums: number[], k: number): number {
  /**
      k가 0일 수 있음
   */

  const zeroIdxList: number[] = [-1]; // 시작 전(-1번 인덱스)에 0이 있는 것으로 가정
  let maxLen = 0;

  // 0이 있는 인덱스를 확인하여 저장 
  for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (num) continue;
      else zeroIdxList.push(i);
  }

  // 처음에 k번째 0까지 채웠을때의 길이(-1) === 0 ~ k + 1 번째 0까지의 길이
  if (zeroIdxList.length > k) maxLen = zeroIdxList[k];
  else return nums.length; // 같거나 작으면 nums의 0을 다 채울 수 있음

  zeroIdxList.push(nums.length); // nums의 nums.length + 1 인덱스에 0 있는 것으로 가정
  for (let i = k; i < zeroIdxList.length; i++) {
      const diff = zeroIdxList[i + 1] - zeroIdxList[i - k];
      if (diff > maxLen) {
          maxLen = diff;
      }
  }

  return maxLen - 1;
};