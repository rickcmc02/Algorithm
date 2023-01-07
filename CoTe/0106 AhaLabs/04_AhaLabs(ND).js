function solution(total_sp, skills) {
  var answer = [];
  let iSet = new Set();

  skills.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    else if (b[1] > a[1]) return -1;
    else return 0;
  });

  let prevListDict = {};
  skills.forEach((skill) => {
    let nextSkill = skill[0];
    let prevSkill = skill[1];
    if (prevListDict[nextSkill]) prevListDict[nextSkill].push(prevSkill);
    else prevListDict[nextSkill] = [prevSkill];

    iSet.add(skill[0]);
    iSet.add(skill[1]);
  });

  let iList = Array.from(iSet);
  const iLen = iList.length;

  // index와 length 차이 1만큼 보정
  let iPointList = new Array(iLen + 1);

  Object.keys(prevListDict).forEach((iNum) => {
    let prevListValue = prevListDict[iNum];
    iPointList[iNum] = prevListValue;
  });

  iPointList.forEach((iPoints) => {
    if (iPoints) {
      iPoints.forEach((iPoint, idx) => {
        if (iPointList[iPoint]) {
          iPoints[idx] = iPointList[iPoint];
        }
      });
    }
  });

  console.log(iPointList);

  return answer;
}
