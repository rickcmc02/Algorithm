const rawInput = `10
1 5 2 1 4 3 4 5 2 1`;

const input = rawInput.toString().trim().split("\n");
const N = +input[0];
const numList = input[1].split(" ").map(Number);

const ascDP = Array(N).fill(1);
const descDP = Array(N).fill(1);

const minNum = 1;
let longest = 1;

for (let idx = 0; idx < N; idx++) {
  const currNum = numList[idx];
  if (currNum === minNum) continue;
  let currMax = 1;
  for (let compIdx = 0; compIdx < idx; compIdx++) {
    const compNum = numList[compIdx];
    if (currNum > compNum) {
      currMax = Math.max(currMax, ascDP[compIdx] + 1);
    }
  }
  ascDP[idx] = currMax;
}

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
