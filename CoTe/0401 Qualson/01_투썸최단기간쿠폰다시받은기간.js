function solution(arr) {
  let recentDict = {};
  let minDiff = -1;

  for (let i = 0; i < arr.length; i++) {
    let cus = arr[i];
    if (recentDict[cus]) {
      let diff = i + 1 - recentDict[cus];
      if (minDiff === -1) minDiff = diff;
      else if (minDiff > diff) minDiff = diff;
    }
    recentDict[cus] = i + 1;
  }

  return minDiff;
}
