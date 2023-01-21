function solution(bombs) {
  let defusedNum = 0;
  let sortedBombs = bombs.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < sortedBombs.length; i++) {
    let timetick = i + 1;
    let bombtime = sortedBombs[i];
    if (bombtime < timetick) break;
    else defusedNum++;
  }

  return defusedNum;
}
