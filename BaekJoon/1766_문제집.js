// const input = require("fs")
//   .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);

// 최소힙, 위상정렬을 이용해 푸는 문제

const rawInput = `6 7
5 6
5 2
2 1
6 1
2 4
1 3
4 3
`;

const input = rawInput
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const [N, M] = input[0];
const visited = Array(N + 1).fill(0);
const formerData = {};

for (let formerInfoIdx = 1; formerInfoIdx <= M; formerInfoIdx++) {
  const [former, latter] = input[formerInfoIdx];
  formerData[latter] = former; // 특정 문제에 대해서 선행 문제가 하나일 때만 해당
}

const buildStr = (latter, addedStr) => {
  visited[latter] = 1;
  if (formerData[latter]) {
    addedStr += buildStr(formerData[latter], latter + " " + addedStr);
  } else {
    addedStr = latter + " " + addedStr;
    return addedStr;
  }
};

let answer = "";
for (let i = 1; i <= N; i++) {
  if (visited[i]) continue;

  let addedStr = "";
  if (formerData[i]) {
    addedStr += buildStr(formerData[i], i);
  } else {
    addedStr += i;
    visited[i] = 1;
  }
  if (answer) answer += " " + addedStr;
  else answer = addedStr;
}

console.log(answer);
