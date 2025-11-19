/*
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 

Example 1:

Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
Example 2:

Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
 

Constraints:

0 <= n <= 105
*/

// gpt helped

function countBits(n: number): number[] {
  const ans = new Array(n + 1).fill(0)

  let base = 1 // 현재 구간의 시작 2^k 값 (1, 2, 4, 8, ...)

  for (let i = 1; i <= n; i++) {
    // i가 base * 2에 도달하면, 다음 2의 거듭제곱 범위로 이동
    if (i === base * 2) {
      base *= 2
    }

    // i = base + x 이므로, bitCount(i) = bitCount(x) + 1
    ans[i] = ans[i - base] + 1
  }

  return ans
};