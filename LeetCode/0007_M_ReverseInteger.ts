/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1
*/

function reverse(x: number): number {
  const isMinus = Boolean(x < 0);
  const strNum = isMinus ? -x + "" : x + "";
  const revNum = +strNum.split("").reverse().join("");
  if (revNum.toString(2).length > 31) return 0;
  return isMinus ? -revNum : revNum;
}
