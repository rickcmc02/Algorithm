/*
You are given a 0-indexed integer array costs where costs[i] is the cost of hiring the ith worker.

You are also given two integers k and candidates. We want to hire exactly k workers according to the following rules:

You will run k sessions and hire exactly one worker in each session.
In each hiring session, choose the worker with the lowest cost from either the first candidates workers or the last candidates workers. Break the tie by the smallest index.
For example, if costs = [3,2,7,7,1,2] and candidates = 2, then in the first hiring session, we will choose the 4th worker because they have the lowest cost [3,2,7,7,1,2].
In the second hiring session, we will choose 1st worker because they have the same lowest cost as 4th worker but they have the smallest index [3,2,7,7,2]. Please note that the indexing may be changed in the process.
If there are fewer than candidates workers remaining, choose the worker with the lowest cost among them. Break the tie by the smallest index.
A worker can only be chosen once.
Return the total cost to hire exactly k workers.

 

Example 1:

Input: costs = [17,12,10,2,7,2,11,20,8], k = 3, candidates = 4
Output: 11
Explanation: We hire 3 workers in total. The total cost is initially 0.
- In the first hiring round we choose the worker from [17,12,10,2,7,2,11,20,8]. The lowest cost is 2, and we break the tie by the smallest index, which is 3. The total cost = 0 + 2 = 2.
- In the second hiring round we choose the worker from [17,12,10,7,2,11,20,8]. The lowest cost is 2 (index 4). The total cost = 2 + 2 = 4.
- In the third hiring round we choose the worker from [17,12,10,7,11,20,8]. The lowest cost is 7 (index 3). The total cost = 4 + 7 = 11. Notice that the worker with index 3 was common in the first and last four workers.
The total hiring cost is 11.
Example 2:

Input: costs = [1,2,4,1], k = 3, candidates = 3
Output: 4
Explanation: We hire 3 workers in total. The total cost is initially 0.
- In the first hiring round we choose the worker from [1,2,4,1]. The lowest cost is 1, and we break the tie by the smallest index, which is 0. The total cost = 0 + 1 = 1. Notice that workers with index 1 and 2 are common in the first and last 3 workers.
- In the second hiring round we choose the worker from [2,4,1]. The lowest cost is 1 (index 2). The total cost = 1 + 1 = 2.
- In the third hiring round there are less than three candidates. We choose the worker from the remaining workers [2,4]. The lowest cost is 2 (index 0). The total cost = 2 + 2 = 4.
The total hiring cost is 4.
 

Constraints:

1 <= costs.length <= 105 
1 <= costs[i] <= 105
1 <= k, candidates <= costs.length
*/

// ast

class MinHeap {
  heap: number[] = [];

  size(): number {
      return this.heap.length;
  }

  swap(idx1: number, idx2: number) {
      [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  add(cost: number) {
      this.heap.push(cost);
      this.bubbleUp();
  }

  bubbleUp() {
      let idx = this.size() - 1;
      let parentIdx = Math.floor((idx - 1) / 2);

      while (!isNaN(this.heap[parentIdx]) && this.heap[idx] < this.heap[parentIdx]) {
          this.swap(idx, parentIdx);
          idx = parentIdx;
          parentIdx = Math.floor((idx - 1) / 2);
      }
  }

  bubbleDown() {
      let idx = 0;
      const len = this.size();

      while (true) {
          let largest = idx;
          const [left, right] = [2 * idx + 1, 2 * idx + 2];

          if (left < len && this.heap[left] < this.heap[largest]) {
              largest = left;
          }
          if (right < len && this.heap[right] < this.heap[largest]) {
              largest = right;
          }

          if (largest === idx) break;
          this.swap(idx, largest);
          idx = largest;
      }
  }

  poll() {
      if (this.size() === 0) return -1;
      if (this.size() === 1) return this.heap.pop()!;
      const min = this.heap[0];
      this.heap[0] = this.heap.pop()!; // 루트에 마지막 값 삽입
      this.bubbleDown(); // 루트 자식 노드 비교하면서 재정렬
      return min;
  }

  peek(): number {
      return this.heap[0];
  }
}

function totalCost(costs: number[], k: number, candidates: number): number {
  const n = costs.length;
  let total = 0;
  let left = 0;
  let right = n - 1;

  const leftHeap = new MinHeap();
  const rightHeap = new MinHeap();

  // 초기 후보군 채우기
  while (left < candidates && left <= right) {
      leftHeap.add(costs[left++]);
  }
  while (right >= n - candidates && left <= right) {
      rightHeap.add(costs[right--]);
  }

  for (let i = 0; i < k; i++) {
      const leftMin = leftHeap.size() ? leftHeap.peek() : Infinity;
      const rightMin = rightHeap.size() ? rightHeap.peek() : Infinity;

      if (leftMin <= rightMin) {
          total += leftHeap.poll();
          if (left <= right) {
              leftHeap.add(costs[left++]);
          }
      } else {
          total += rightHeap.poll();
          if (left <= right) {
              rightHeap.add(costs[right--]);
          }
      }
  }

  return total;
}