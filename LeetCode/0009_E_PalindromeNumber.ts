/*
Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?
*/

// trial 2 240511
/*
음수기호가 붙는 순간 false가 되는 규칙이므로, 0 미만 false
10 미만은 한자리 수이므로 true
역순 index revI = xLen - 1 - i
*/

function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  if (x < 10) return true;

  let strX = x + "";
  const xLen = strX.length;
  for (let i = 0; i < xLen; i++) {
    const revI = xLen - 1 - i;
    if (i === revI || i > revI) return true;
    if (strX[i] !== strX[revI]) return false;
  }

  return true;
}

// trial 1

// function isPalindrome(x: number): boolean {
//   if (x < 0) return false;
//   if (x < 10) return true;

//   let isPalindrome = true;
//   const strX = x.toString();
//   const xLen = strX.length;
//   for (let i = 0; i < xLen; i++) {
//     const ri = xLen - 1 - i;
//     if (i > ri) break;
//     if (strX[i] !== strX[ri]) {
//       isPalindrome = false;
//       break;
//     }
//   }
//   return isPalindrome;
// }
