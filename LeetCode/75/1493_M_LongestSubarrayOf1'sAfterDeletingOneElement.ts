/*
Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

 

Example 1:

Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
Example 2:

Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
Example 3:

Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
*/

// answer 2

function longestSubarray(nums: number[]): number {
    const numsLen = nums.length;
    let [startIdx, endIdx] = [0, 0];
    let lastZeroIdx = -1;
    let longestLen = 0;
    nums.push(0); // 끝에 0을 추가함으로서 for문 내 로직 끝까지 돌도록

    for (let i = 0; i < numsLen + 1; i++) {
        const currVal = nums[i];
        
        if (!currVal) {
            const diff = endIdx - startIdx;
            if (diff > longestLen) longestLen = diff;
            startIdx = lastZeroIdx + 1; // 지난번 0 위치 + 1 => 맨 앞 1 위치
            lastZeroIdx = i; // 새로운 0 위치 저장
        }
        endIdx = i;
    }

    // 0이 없는 경우에도 Deleting One Element 해야하니까
    if (lastZeroIdx === -1) return numsLen - 1;

    return longestLen;
};

// answer 1
/*
function longestSubarray(nums: number[]): number {
  let maxLen = 0;

  const zeroIdxList: number[] = [-1]; // 0번 인덱스 앞에 0이 있다고 가정
  nums.forEach((num, i) => {
      if (!num) zeroIdxList.push(i);
  });
  // 0이 1개만 있는 경우, 길이에서 1개의 0이 제외, 0이 없는 경우에도 길이에서 1개의 요소(1)가 제외
  if (zeroIdxList.length <= 2) return nums.length - 1; 
  zeroIdxList.push(nums.length); // 마지막 인덱스 뒤에 0이 있다고 가정

  for (let i = 0; i < zeroIdxList.length - 2; i++) {
      const [startIdx, endIdx] = [zeroIdxList[i], zeroIdxList[i + 2]];
      const diff = endIdx - startIdx;
      if (diff > maxLen) maxLen = diff;
  }
  // Longest Subarray의 앞 index, 뒤 index의 차이이므로 -1, 길이에서 한 개의 0이 제외되므로 추가로 -1
  return maxLen - 2;
};
*/