/*
Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

 

Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
 

Constraints:

1 <= k <= nums.length <= 105
-104 <= nums[i] <= 104

*/

// second solution

class MaxHeap {
  heap: number[] = [];

  size() {
      return this.heap.length;
  }

  add(n: number) {
      this.heap.push(n);
      this.bubbleUp();
  }

  swap(idx1: number, idx2: number) {
      [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  bubbleUp() {
      let idx = this.size() - 1;
      let parentIdx = Math.floor((idx - 1) / 2);

      while (!isNaN(this.heap[parentIdx]) && this.heap[parentIdx] < this.heap[idx]) {
          this.swap(idx, parentIdx);
          idx = parentIdx;
          parentIdx = Math.floor((idx - 1) / 2); // 새로운 부모 모드의 인덱스 계산
      }
  }

  bubbleDown() {
      let idx = 0;
      const len = this.size();

      while (true) {
          let largest = idx;
          const [left, right] = [2 * idx + 1, 2 * idx + 2];

          if (left < len && this.heap[left] > this.heap[largest]) {
              largest = left; // 왼쪽 자식 노드의 값보다 부모가 작음
          }
          if (right < len && this.heap[right] > this.heap[largest]) {
              largest = right; // 오른쪽 자식 노드의 값보다 왼쪽 자식 노드 또는 부모가 작음
          }

          if (largest === idx) break; // 부모가 자식보다 큼
          this.swap(idx, largest);
          idx = largest;
      }

  }

  poll() {
      if (this.size() === 0) return -1;
      const max = this.heap[0];
      this.heap[0] = this.heap.pop()!; // 루트에 마지막 값 삽입
      this.bubbleDown(); // 루트 자식 노드 비교하면서 재정렬
      return max;
  }
}

function findKthLargest(nums: number[], k: number): number {
  const maxHeap = new MaxHeap();
  
  for (const num of nums) {
      maxHeap.add(num);
  }

  for (let i = 1; i < k; i++) {
      maxHeap.poll(); // k - 1번 가장 큰 수 제거
  }

  return maxHeap.poll();
}