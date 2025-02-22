/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
*/

function moveZeroes(nums: number[]): void {
  let zeroCounter = 0;
  const neoList: number[] = [];

  nums.forEach((num) => {
    if (num) neoList.push(num);
    else zeroCounter++;
  });

  if (zeroCounter) neoList.push(...new Array(zeroCounter).fill(0));
  neoList.forEach((num, idx) => (nums[idx] = num));
}
