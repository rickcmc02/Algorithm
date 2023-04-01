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
      lastGrade = grade;
    }
  });

  grade.forEach((grd) => {
    rankArr.push(srDict[grd]);
  });

  return rankArr;
}
