/*
A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
 

Constraints:

1 <= nums.length <= 1000
-231 <= nums[i] <= 231 - 1
nums[i] != nums[i + 1] for all valid i.
*/

function findPeakElement(nums: number[]): number {
  const nLen = nums.length;
  let [left, right] = [0, nLen - 1];

  // 길이 정한 김에 체크
  if (nLen === 1) return 0;

  // left, right index 정한 김에 체크
  if (nums[left] > nums[left + 1]) return left;
  if (nums[right] > nums[right - 1]) return right;

  const findPeak = (l: number, r: number): number | null => {
      let isEndL = l === 0;
      let isEndR = r === nLen - 1;

      if ((isEndL || nums[l - 1] < nums[l]) && nums[l + 1] < nums[l]) return l;
      if ((isEndR || nums[r + 1] < nums[r]) && nums[r - 1] < nums[r]) return r;

      if (l === r) return null;

      const mid = Math.floor((l + r) / 2);
      if (mid === l) return findPeak(mid, r - 1); // floor를 하기 때문에 같아질 수 있음
      else return findPeak(l + 1, mid) || findPeak(mid, r - 1);
  }

  return findPeak(left, right)!;
};