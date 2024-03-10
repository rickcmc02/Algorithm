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

interface NullableListNode {
  val: number | null;
  next: ListNode | null;
}

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return head;
  let currLN = head;
  let revLN: NullableListNode = { val: null, next: null };

  while (currLN?.val || currLN?.val === 0) {
    if (revLN.val || revLN.val === 0)
      revLN.next = { val: revLN.val, next: revLN.next };
    revLN.val = currLN.val;
    currLN = currLN.next as ListNode;
  }
  return revLN as ListNode;
}
