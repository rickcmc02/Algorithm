function solution(grade) {
  let rankArr = [];
  let sortedGrade = [...grade].sort((a, b) => b - a);
  let srDict = {}; // score - rank dict

  let rankNum = 0;
  let lastGrade = 0;
  sortedGrade.forEach((grade) => {
    rankNum++;
    if (lastGrade !== grade) {
      srDict[grade] = rankNum;
      lastGrade = grade; // 점수 달라질때마다 순위 기록하기
    }
  });

  grade.forEach((grd) => {
    rankArr.push(srDict[grd]); // 점수 - 랭크 매칭
  });

  return rankArr;
}
