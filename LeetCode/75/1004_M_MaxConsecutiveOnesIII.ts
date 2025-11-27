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

// answer 2
function longestOnes(nums: number[], k: number): number {
    let maxLen = 0;
    const numLen = nums.length;
    const zeroPos: number[] = [-1]; // 맨 처음에도 0이 있다고 가정
    
    for (let i = 0; i < numLen; i++) {
        const num = nums[i];
        if (num === 0) zeroPos.push(i);
    }
    zeroPos.push(numLen); // 마지막에도 0이 있다고 가정
    const zeroLen = zeroPos.length;

    // 방어 코드 (k보다 실제 0의 갯수가 같거나 적을 경우, 무조건 0이 전부 차므로 numLen)
    if (k >= zeroLen - 2) return numLen;

    for (let i = k + 1; i < zeroLen; i++) { // 초기값 k + 1: 1~k번째 0 채워져 있다고 가정하고 카운트
        const consecutiveLen = zeroPos[i] - zeroPos[i - k - 1] - 1; // 길이기 때문에 양쪽 끝 0 인덱스 차이에서 -1 해야함
        if (consecutiveLen > maxLen) maxLen = consecutiveLen;
    }

    return maxLen;
};


// answer 1
/*
function longestOnes(nums: number[], k: number): number {
  // k가 0일 수 있음

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
*/