// const input = require("fs")
//   .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);

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
const visited = Array(N + 1).fill(0); // 방문 여부를 체크하기 위한 배열 (0: 방문하지 않음, 1: 방문함, 0번 인덱스는 사용하지 않음)
const formerData = {};

for (let formerInfoIdx = 1; formerInfoIdx <= M; formerInfoIdx++) {
  const [former, latter] = input[formerInfoIdx];
  const formerList = formerData[latter];
  if (formerList) formerData[latter] = formerList.concat(former);
  else formerData[latter] = [former];
}

for (let i = 1; i <= N; i++) {
  if (formerData[i]) formerData[i].sort((a, b) => a - b);
}

const buildStr = (formerList, addedStr, idx) => {
  if (idx === formerList.length) return addedStr;

  const former = formerList[idx];
  const isVisited = visited[former];
  if (formerData[former]) {
    if (isVisited) return buildStr(formerData[former], addedStr, 0);
    else {
      visited[former] = 1;
      return buildStr(formerData[former], former + " " + addedStr, 0);
    }
  }

  if (isVisited) return buildStr(formerList, addedStr, idx + 1);
  else {
    visited[former] = 1;
    return buildStr(formerList, former + " " + addedStr, idx + 1);
  }
};

let answer = "";
for (let i = 1; i <= N; i++) {
  if (visited[i]) continue;

  let addedStr = "";
  if (formerData[i]) {
    addedStr += buildStr(formerData[i], i, 0);
  } else {
    addedStr += i;
  }
  visited[i] = 1;
  if (answer) answer += " " + addedStr;
  else answer = addedStr;
}

console.log(answer);
