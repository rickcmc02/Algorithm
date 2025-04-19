/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000

*/

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let currLN = head;
  let revLN: ListNode = new ListNode();
  let isStarted = false

  while (currLN?.val || currLN?.val === 0) {
      if (isStarted) revLN.next = { val: revLN.val, next: revLN.next };
      else isStarted = true;
      revLN.val = currLN.val;
      currLN = currLN.next as ListNode;
  }
  return revLN;
};