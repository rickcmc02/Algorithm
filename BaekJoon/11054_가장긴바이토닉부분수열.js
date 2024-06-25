const rawInput = `10
1 5 2 1 4 3 4 5 2 1`;

const input = rawInput.toString().trim().split("\n");
const N = +input[0];
const numList = input[1].split(" ").map(Number);

const ascDP = Array(N).fill(1); // 오름차순 동적 프로그래밍 배열
const descDP = Array(N).fill(1);

const minNum = 1;
let longest = 1;

// 2중 반복문으로
for (let idx = 0; idx < N; idx++) {
  const currNum = numList[idx];
  if (currNum === minNum) continue; // 1이면 패스
  let currMax = 1; // 현재 최대값
  // 지금 idx 이전까지의 idx만 비교
  for (let compIdx = 0; compIdx < idx; compIdx++) {
    const compNum = numList[compIdx];
    if (currNum > compNum) {
      // 현재 숫자가 비교 숫자보다 높으니까, +1을 해주는 것이 맞다
      currMax = Math.max(currMax, ascDP[compIdx] + 1);
    }
  }
  ascDP[idx] = currMax;
}

// 뒤에서부터 탐색
for (let idx = N - 1; idx >= 0; idx--) {
  const currNum = numList[idx];
  if (currNum === minNum) continue;
  let currMax = 1;
  for (let compIdx = N - 1; compIdx > idx; compIdx--) {
    const compNum = numList[compIdx];
    if (currNum > compNum) {
      currMax = Math.max(currMax, descDP[compIdx] + 1);
    }
  }
  descDP[idx] = currMax;
}

for (let i = 0; i < N; i++) {
  longest = Math.max(longest, ascDP[i] + descDP[i] - 1);
}

console.log(longest);
