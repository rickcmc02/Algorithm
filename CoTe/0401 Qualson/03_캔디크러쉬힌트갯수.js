function solution(board) {
  // 자리 한 위치에서 중복되지 않게 교환하는 방법 2번 또는 한번 (오른쪽, 아래쪽)
  // 2번 또는 1번 바꾼 뒤 가로 세로 중복 검증 (위아래로 2개 이상 또는 좌우로 2개 이상 같은 값인지 검증)
  let answer = 0;

  for (let y = 0; y < board.length; y++) {
    let xLine = board[y];
    for (let x = 0; x < board.length; x++) {
      let candyNum = xLine[x];
      let sameNums = 0;
      // x(우측) 스왑
      if (x + 1 !== board.length) {
        // x + 1 위치 y축 검증
        let nx = x + 1;
        if (y - 2 > -1 && board[y - 2][nx] === candyNum) {
          if (board[y - 1][nx] === candyNum) {
            answer++;
            continue;
          }
        } else if (y - 1 > -1 && board[y - 1][nx] === candyNum) {
          if (y + 1 < board.length && board[y + 1][nx] === candyNum) {
            answer++;
            continue;
          }
        } else if (y + 2 < board.length && board[y + 2][nx] === candyNum) {
          if (board[y + 1][nx] === candyNum) {
            answer++;
            continue;
          }
        }

        // x 위치 y축 검증
        candyNum = xLine[nx];
        if (y - 2 > -1 && board[y - 2][x] === candyNum) {
          if (board[y - 1][x] === candyNum) {
            answer++;
            continue;
          }
        } else if (y - 1 > -1 && board[y - 1][x] === candyNum) {
          if (y + 1 < board.length && board[y + 1][x] === candyNum) {
            answer++;
            continue;
          }
        } else if (y + 2 < board.length && board[y + 2][x] === candyNum) {
          if (board[y + 1][x] === candyNum) {
            answer++;
            continue;
          }
        }
      }

      // y(하단) 스왑
      if (y + 1 === board.length) continue;
      else {
        sameNums = 0;
        candyNum = xLine[x];
        // y + 1 위치 x축 검증
        let ny = y + 1;
        if (x - 2 > -1 && board[ny][x - 2] === candyNum) {
          if (board[ny][x - 1] === candyNum) {
            answer++;
            continue;
          }
        } else if (x - 1 > -1 && board[ny][x - 1] === candyNum) {
          if (x + 1 < board.length && board[ny][x + 1] === candyNum) {
            answer++;
            continue;
          }
        } else if (x + 2 < board.length && board[ny][x + 2] === candyNum) {
          if (board[ny][x + 1] === candyNum) {
            answer++;
            continue;
          }
        }

        // y위치 x축 검증
        candyNum = board[y + 1][x];
        if (x - 2 > -1 && board[y][x - 2] === candyNum) {
          if (board[y][x - 1] === candyNum) {
            answer++;
            continue;
          }
        } else if (x - 1 > -1 && board[y][x - 1] === candyNum) {
          if (x + 1 < board.length && board[y][x + 1] === candyNum) {
            answer++;
            continue;
          }
        } else if (x + 2 < board.length && board[y][x + 2] === candyNum) {
          if (board[y][x + 1] === candyNum) {
            answer++;
            continue;
          }
        }
      }
    }
  }

  if (!answer) answer = -1;
  return answer;
}
