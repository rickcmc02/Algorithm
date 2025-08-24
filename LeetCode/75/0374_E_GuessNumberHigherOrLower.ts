/*
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.

 

Example 1:

Input: n = 10, pick = 6
Output: 6
Example 2:

Input: n = 1, pick = 1
Output: 1
Example 3:

Input: n = 2, pick = 1
Output: 1
 

Constraints:

1 <= n <= 231 - 1
1 <= pick <= n
*/

// guess -> pre-defined API (오류 방지 위해 임시로 정의)
const guess = (num: number): number => {
    return 0;
};

function guessNumber(n: number): number {
  let [a, b] = [1, n];
  let center = Math.floor((a + b) / 2);

  while (true) {
      const res = guess(center);
      if (res === 0) return center;
      else if (res === 1) {
          a = center;
          center = Math.ceil((a + b) / 2); // center는 이미 검증되었으니 올림
      } else if (res === -1) {
          b = center;
          center = Math.floor((a + b) / 2); // center는 이미 검증되었으니 내림
      }
  }

  return 1;
};
