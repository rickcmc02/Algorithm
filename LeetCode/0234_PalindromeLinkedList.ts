/*
Given the head of a singly linked list, return true if it is a 
palindrome
 or false otherwise.

 

Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false
 

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
*/

function isPalindrome(head: ListNode | null): boolean {
  if (!head) return false;
  if (!head.next) return true;

  const valList: number[] = [];
  function gatherValues(ln: ListNode | null) {
    if (!ln) return;
    valList.push(ln.val);
    gatherValues(ln.next);
  }
  gatherValues(head);

  const valLen = valList.length;
  for (let i = 0; i < valLen; i++) {
    const revI = valLen - 1 - i;
    if (i >= revI) return true;
    if (valList[i] !== valList[revI]) return false;
  }
  return false;
}
