function solution(v) {
  const xDict = {};
  const yDict = {};
  for (let i = 0; i < v.length; i++) {
    const xPos = v[i][0];
    const yPos = v[i][1];
    if (xDict[xPos]) xDict[xPos] = false;
    else xDict[xPos] = true;
    if (yDict[yPos]) yDict[yPos] = false;
    else yDict[yPos] = true;
  }

  const answer = [];

  Object.keys(xDict).forEach((xPos) => {
    if (xDict[xPos]) answer.push(+xPos);
  });

  Object.keys(yDict).forEach((yPos) => {
    if (yDict[yPos]) answer.push(+yPos);
  });

  return answer;
}
