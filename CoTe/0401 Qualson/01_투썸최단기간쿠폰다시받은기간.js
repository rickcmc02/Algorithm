// arr로 쿠폰 당첨자 id 리스트
function solution(arr) {
  let recentDict = {}; // 쿠폰 당첨자 아이디: 가장 최근 당첨일
  let minDiff = -1; // 최단 재당첨 간격

  for (let i = 0; i < arr.length; i++) {
    let cus = arr[i];
    if (recentDict[cus]) {
      let diff = i + 1 - recentDict[cus];
      if (minDiff === -1) minDiff = diff;
      else if (minDiff > diff) minDiff = diff;
    }
    recentDict[cus] = i + 1; // id: 당첨일 기록
  }

  return minDiff;
}
