/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

const addTwoNumbers = function (l1, l2) {
  let sumVal = l1.val + l2.val;
  let decimalNum = sumVal > 9 ? 1 : 0;
  let lastDigit = decimalNum ? sumVal - 10 : sumVal;
  const numbers = [lastDigit];
  let nextL1 = l1.next;
  let nextL2 = l2.next;

  while (nextL1 || nextL2) {
    sumVal = decimalNum;
    if (nextL1) {
      sumVal += nextL1.val;
      nextL1 = nextL1.next;
    }
    if (nextL2) {
      sumVal += nextL2.val;
      nextL2 = nextL2.next;
    }
    decimalNum = sumVal > 9 ? 1 : 0;
    lastDigit = decimalNum ? sumVal - 10 : sumVal;
    numbers.push(lastDigit);
  }

  if (decimalNum) numbers.push(decimalNum);

  let answer = null;
  for (let i = numbers.length - 1; i > -1; i--) {
    answer = { val: numbers[i], next: answer };
  }

  return answer;
};
