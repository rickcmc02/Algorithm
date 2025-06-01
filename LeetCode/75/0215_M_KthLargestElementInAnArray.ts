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

// first solution

class MaxHeap {
  heap = []; // 힙을 저장할 배열

  constructor() {
  }

  // 힙의 크기를 반환하는 메서드
  size() {
      return this.heap.length;
  }

  // 두 값을 바꿔주는 메서드
  swap(idx1, idx2) {
      [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  // 새로운 노드를 추가하는 메서드
  add(value) {
      this.heap.push(value); // 힙의 끝에 새로운 노드 추가
      this.bubbleUp(); // 새로운 값이 추가된 위치에서 bubbleUp() 수행
  }

  // 끝에 추가된 노드를 부모와 비교하며 자리 찾아가기
  bubbleUp() {
      let index = this.size() - 1; // 새로운 노드가 추가된 위치
      let parentIdx = Math.floor((index - 1) / 2); // 부모 노드의 위치
      while (
          (this.heap[parentIdx] || this.heap[parentIdx] === 0) && // 부모 노드가 존재하고 (0 포함)
          this.heap[index] > this.heap[parentIdx] // 새로운 노드가 부모 노드보다 큰 경우
      ) {
          this.swap(index, parentIdx); // 두 노드의 값을 교체
          index = parentIdx; // 인덱스를 부모 노드의 인덱스로 변경
          parentIdx = Math.floor((index - 1) / 2); // 새로운 부모 노드의 인덱스 계산
      }
  }

  // 부모 노드를 자식과 비교하여 자리 찾아가기
  bubbleDown() {
      let index = 0;
      const length = this.size();
      while (true) {
          let largest = index;
          const left = 2 * index + 1;
          const right = 2 * index + 2;

          if (left < length && this.heap[left] > this.heap[largest]) {
              largest = left;
          }

          if (right < length && this.heap[right] > this.heap[largest]) {
              largest = right;
          }

          if (largest === index) break;
          this.swap(index, largest);
          index = largest;
      }
  }

  poll(): number {
      if (this.size() === 0) return -1;
      if (this.size() === 1) return this.heap.pop()!; // 최대값 꺼내기
      const max = this.heap[0];
      this.heap[0] = this.heap.pop()!; // 루트에 마지막 넣고
      this.bubbleDown(); // 재정렬
      return max;
  }
}

function findKthLargest(nums: number[], k: number): number {
  const maxHeap = new MaxHeap();

  // 전체 수를 힙에 넣음 (O(N log N))
  for (const num of nums) {
      maxHeap.add(num);
  }

  // k - 1번 꺼냄 (O(K log N))
  for (let i = 1; i < k; i++) {
      const popped = maxHeap.poll(); // 가장 큰 수 제거
  }

  return maxHeap.poll(); // k번째 큰 수
}