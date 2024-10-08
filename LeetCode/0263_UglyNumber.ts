/*
An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

Given an integer n, return true if n is an ugly number.

 

Example 1:

Input: n = 6
Output: true
Explanation: 6 = 2 × 3
Example 2:

Input: n = 1
Output: true
Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
Example 3:

Input: n = 14
Output: false
Explanation: 14 is not ugly since it includes the prime factor 7.
 

Constraints:

-231 <= n <= 231 - 1
*/

function isUgly(n: number): boolean {
  if (n < 1) return false;
  let tmpN = n;
  while (!(tmpN % 5)) tmpN /= 5;
  while (!(tmpN % 3)) tmpN /= 3;
  while (!(tmpN % 2)) tmpN /= 2;
  if (tmpN === 1) return true;
  else return false;
}
