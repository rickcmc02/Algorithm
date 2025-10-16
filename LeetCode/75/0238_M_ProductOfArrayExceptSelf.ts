/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.

*/

// answer 2
function productExceptSelf(nums: number[]): number[] {
    let numZeros = 0;
    let numZeroIdx = -1;
    let allMultiplied = 1; // 0이 아닌 모든 수의 곱
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (num) {
            allMultiplied *= num;
        } else {
            numZeros++;
            numZeroIdx = i;
        }
    }

    if (numZeros === 0) 
        return nums.map((num) => allMultiplied / num);
    if (numZeros === 1) 
        return nums.map((num, i) => {
            if (i === numZeroIdx) return allMultiplied;
            else return 0;
        })
    else // 0이 2개 이상
        return new Array(nums.length).fill(0);
};

// answer 1
/*
function productExceptSelf(nums: number[]): number[] {
  const numLen = nums.length;
  let allMulti = 1;
  let zeroNum = 0;
  let zeroIdx = -1;

  for (let i = 0; i < numLen; i++) {
    const num = nums[i];
    if (num === 0) {
      // 0이 2개 이상이면 반드시 모두 0
      if (zeroNum) return new Array(numLen).fill(0);
      else zeroNum = 1;
      zeroIdx = i;
      continue; // 0은 전체 곱에서 제외
    }

    allMulti *= num;
  }

  // 0이 있다면 0 외 인덱스 값은 0 (곱셉에 0 포함되므로)
  if (zeroNum) {
    const oneValueList = new Array(numLen).fill(0);
    oneValueList[zeroIdx] = allMulti;
    return oneValueList;
  }

  return nums.map((num) => allMulti / num);
}
*/
