// 최소힙, 위상정렬을 이용해 푸는 문제 - 위상정렬을 이용해야 하는 이유는 선행 문제가 여러개일 수 있기 때문

const rawInput = `6 6
6 5
6 4
5 3
4 2
3 1
2 1
`;

const input = rawInput
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.split(" ").map(Number));

const [N, M] = input[0];
const degrees = Array(N + 1).fill(0); // 0번 인덱스는 사용하지 않음
const edges = Array.from({ length: N + 1 }, () => []);
const formerLatters = {}; // 후행 문제 저장

for (let idx = 1; idx <= M; idx++) {
  const [former, latter] = input[idx];
  if (formerLatters[former]) formerLatters[former].push(latter);
  else formerLatters[former] = [latter];
  degrees[latter]++;
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let lastIdx = this.heap.length - 1;
    while (lastIdx > 0) {
      const parentIdx = Math.floor((lastIdx - 1) / 2);
      if (this.heap[lastIdx] >= this.heap[parentIdx]) break; // 최소힙이므로 부모노드가 더 작아야
      [this.heap[lastIdx], this.heap[parentIdx]] = [
        this.heap[parentIdx],
        this.heap[lastIdx],
      ];
      lastIdx = parentIdx;
    }
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const result = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return result;
  }

  bubbleDown() {
    let parentIdx = 0;
    const heapLen = this.heap.length;

    while (parentIdx < heapLen) {
      const leftChildIdx = parentIdx * 2 + 1;
      const rightChildIdx = parentIdx * 2 + 2;
      let minIdx = parentIdx;

      if (
        leftChildIdx < heapLen &&
        this.heap[leftChildIdx] < this.heap[minIdx]
      ) {
        minIdx = leftChildIdx;
      }
      if (
        rightChildIdx < heapLen &&
        this.heap[rightChildIdx] < this.heap[minIdx]
      ) {
        minIdx = rightChildIdx;
      }

      if (minIdx === parentIdx) break;
      [this.heap[parentIdx], this.heap[minIdx]] = [
        this.heap[minIdx],
        this.heap[parentIdx],
      ];
      parentIdx = minIdx;
    }
  }
}

const heap = new MinHeap();

for (let i = 1; i <= N; i++) {
  if (degrees[i] === 0) heap.push(i);
}

let answer = "";
while (heap.size() > 0) {
  const curr = heap.pop();
  answer += curr + " ";

  const latterList = formerLatters[curr];
  if (latterList) {
    for (const latter of latterList) {
      degrees[latter]--;
      if (degrees[latter] === 0) heap.push(latter);
    }
  }
}

console.log(answer.trim());
