/*
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]
Example 2:


Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]
 

Constraints:

The number of nodes in the linked list is in the range [0, 104].
-106 <= Node.val <= 106

*/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  const oddLN: ListNode = new ListNode(head.val);
  let oddCurr = oddLN; // nodeNum >= 1
  const evenLN: ListNode = new ListNode(head.next.val);
  let evenCurr = evenLN; // nodeNum >= 2

  let currLN: ListNode | null = head.next;
  let nodeNum = 2;

  while (currLN.next) {
      nodeNum++;

      if (nodeNum % 2) {
          oddCurr.next = currLN.next;
          oddCurr = oddCurr.next;
      } else {
          evenCurr.next = currLN.next;
          evenCurr = evenCurr.next;
      }
      currLN = currLN.next;
  }

  if (nodeNum % 2) evenCurr.next = null; // 홀수 길이면 ListNode 마지막 링크 제거
  oddCurr.next = evenLN;

  return oddLN;
};