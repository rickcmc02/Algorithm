// [1, 1]에서 시작
// n x n 형태의 자리
// 이미 앉은 관람객으로부터 최소 거리가 가장 멀게
// 거리가 같으면 x가 가장 낮은 자리
// k번째 관람객의 자리 [x, y] 구하기
// 접근 아예 잘못함 ㅎㅎㅎㅎㅎ

function solution(n, k) {
  var answer = [];

  let scoreArr = [];
  let zeroArr = [];
  let visitedOrigin = [];
  for (let i = 0; i < n; i++) {
    zeroArr.push(0);
  }
  for (let i = 0; i < n; i++) {
    scoreArr.push([...zeroArr]);
  }
  visitedOrigin = [...scoreArr];

  let pos = [0, 0];

  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  for (let i = 1; i < k; i++) {
    // 1번부터 시행
    scoreArr[pos[1]][pos[0]] = -1000000;
    let visited = [...visitedOrigin]; // 방문한 곳 리셋
    let queue = [[...pos, 0]]; // 시작 포지션, 스코어 [x, y, score]의 리스트를 가진 큐

    while (queue.length > 0) {
      let [qx, qy, addScore] = queue.shift(); // 다음 방문 장소
      visited[qy][qx] = 1; // 방문 표시
      scoreArr[qy][qx] += addScore;

      for (let j = 0; j < 4; j++) {
        let nx = qx + dx[j];
        let ny = qy + dy[j];
        if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
        if (visited[ny][nx]) continue;
        visited[ny][nx] = 1; // 탐색 방문 표시
        queue.push([nx, ny, addScore + 1]);
      }
    }

    let maxScore = 0;
    let maxPosArr = [];
    scoreArr.forEach((xArr, yIdx) => {
      xArr.forEach((x, xIdx) => {
        if (x > maxScore) {
          maxScore = x;
          maxPosArr = [xIdx, yIdx];
        } else if (x === maxScore && maxPosArr[0] > xIdx) {
          maxPosArr = [xIdx, yIdx];
        }
      });
    });

    pos = maxPosArr;
    if (i === k - 1) {
      answer = [pos[0] + 1, pos[1] + 1];
    }
  }

  return answer;
}
