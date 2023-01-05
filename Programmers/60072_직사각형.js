// 230105  풀이

function solution(v) {
  let xDict = {};
  let yDict = {};
  let answer = [];

  v.forEach((xy) => {
    let [x, y] = xy;
    if (x in xDict) xDict[x] = false;
    else xDict[x] = true;
    if (y in yDict) yDict[y] = false;
    else yDict[y] = true;
  });

  Object.keys(xDict).forEach((x) => {
    if (xDict[x]) answer.push(parseInt(x));
  });
  Object.keys(yDict).forEach((y) => {
    if (yDict[y]) answer.push(parseInt(y));
  });

  return answer;
}
