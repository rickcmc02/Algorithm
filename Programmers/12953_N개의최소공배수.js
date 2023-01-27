function solution(arr) {
  let isSearch = true;
  const sortArr = arr.sort((a, b) => {
    return b - a;
  });
  let lcm = sortArr[0]; // array 중 가장 큰 값부터 시작

  while (isSearch) {
    let isAllPassed = true;
    for (let i = 0; i < sortArr.length; i++) {
      if (lcm % sortArr[i] !== 0) {
        isAllPassed = false;
        break;
      }
    }
    if (isAllPassed) isSearch = false;
    else lcm++;
  }

  return lcm;
}
