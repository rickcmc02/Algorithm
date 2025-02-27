/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
*/

function maxArea(height: number[]): number {
  let hLen = height.length;
  let lh = 0; // 라인 높이
  let lw = 0; // 라인 너비
  let maxCon = 0; // 최대 용량
  let fi = 0; // 조건을 충족하는 앞 idx
  let bi = height.length - 1; // 조건을 충족하는 뒤 idx
  let isLimit = false; // 높이 충족하는 라인 1개 이하일 경우 한계치 도달
  const lMax = Math.max(...height);

  while (!isLimit) {
      let [isF, isB] = [false, false];

      // 이전에 첫번째 값, 마지막 값을 잡았으므로 그 안에서 탐색
      for (let i = fi; i <= bi; i++) {
          if (height[i] > lh) {
              isF = true;
              fi = i;
              break;
          } 
      }
      for (let i = bi; i >= fi; i--) {
          if (height[i] > lh) {
              isB = true;
              bi = i;
              break;
          }
      }
      // 앞 idx, 뒤 idx가 같은 값에 도달했다면 면적 확보 불가
      if (!isF || !isB || fi === bi) isLimit = true;
      else {
          lh++;
          lw = bi - fi;
          const squareSize = lh * lw;
          if (squareSize > maxCon) maxCon = squareSize;
      }
  }

  return maxCon;
};