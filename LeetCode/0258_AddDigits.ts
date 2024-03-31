/*
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
Example 2:

Input: num = 0
Output: 0
 

Constraints:

0 <= num <= 231 - 1
*/

function addDigits(num: number): number {
  let tmpNum = num;
  while (tmpNum > 9) {
    let newNum = 0;
    let currNum = tmpNum;
    while (currNum) {
      const remainder = currNum % 10;
      newNum += remainder;
      currNum = currNum - remainder ? (currNum - remainder) / 10 : 0;
    }
    tmpNum = newNum;
  }

  return tmpNum;
}
