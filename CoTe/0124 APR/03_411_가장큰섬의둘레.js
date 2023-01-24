function solution(maps) {
  let maxLandLen = 0;
  const yMapLen = maps.length;
  const xMapLen = maps[0].length;
  let lineMap = [];
  let visited = [];

  for (let i = 0; i < yMapLen; i++) {
    lineMap.push(new Array(xMapLen).fill(0));
    visited.push(new Array(xMapLen).fill(0));
  }

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  for (let y = 0; y < yMapLen; y++) {
    for (let x = 0; x < xMapLen; x++) {
      if (maps[y][x] === 1) {
        let meet = 0;
        for (let d = 0; d < 4; d++) {
          let ny = y + dy[d];
          let nx = x + dx[d];
          if (ny >= 0 && ny < yMapLen && nx >= 0 && nx < xMapLen) {
            if (maps[ny][nx] === 1) meet++;
          }
        }
        lineMap[y][x] = 4 - meet;
      }
    }
  }

  for (let y = 0; y < yMapLen; y++) {
    for (let x = 0; x < xMapLen; x++) {
      if (maps[y][x]) {
        let stack = [];
        stack.push([x, y]);
        visited[y][x] = 1;
        let landLength = 0;

        while (stack.length) {
          let [sx, sy] = stack.pop();
          landLength += lineMap[sy][sx];
          for (let d = 0; d < 4; d++) {
            let ny = sy + dy[d];
            let nx = sx + dx[d];
            if (
              ny >= 0 &&
              ny < yMapLen &&
              nx >= 0 &&
              nx < xMapLen &&
              visited[ny][nx] === 0
            ) {
              visited[ny][nx] = 1;
              if (maps[ny][nx]) {
                stack.push([nx, ny]);
              }
            }
          }
        }
        if (landLength > maxLandLen) maxLandLen = landLength;
      }
    }
  }

  return maxLandLen;
}
