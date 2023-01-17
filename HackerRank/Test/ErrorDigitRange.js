function findRange(num) {
  // 특정 숫자에 버그가 있으면 그 버그가 그 숫자를 변경함
  // 1을 9로 바꾸는 버그가 있으면 11891이 99899가 됨
  // 그러나 어떤 숫자가 잘못 번역되는지는 모름
  // 이 오류 있는 함수에서 반환 가능한 최대, 최소값의 차를 반환하라 (최대값과 최소값은 각각 다른 오류 형태를 가질 수 있음)
  // 조건: 첫 숫자는 0이 아니다.
  // 오류가 나지 않을 수도 있다 (11891이 11891로 정상적으로 나올수도 있다)

  let answer = 0;

  const strNum = num + "";
  const lenNum = strNum.length;

  let firstNotNineNum = "";
  for (let i = 0; i < lenNum; i++) {
    let idxStrNum = strNum[i];
    if (idxStrNum !== "9") {
      firstNotNineNum = idxStrNum;
      break;
    }
  }

  let strMaxNum = "";
  let maxNum = 0;
  if (firstNotNineNum) {
    strMaxNum = strNum.replaceAll(firstNotNineNum, "9");
    maxNum = parseInt(strMaxNum);
  } else {
    maxNum = num;
  }

  let isFirstDigitOne = false;
  let firstNotZeroNum = "";
  for (let i = 0; i < lenNum; i++) {
    let idxStrNum = strNum[i];
    if (i === 0) {
      if (idxStrNum === "1") {
        isFirstDigitOne = true;
        continue;
      } else {
        firstNotZeroNum = idxStrNum;
        isFirstDigitOne = false;
        break;
      }
    } else if (idxStrNum !== "0") {
      if (isFirstDigitOne && idxStrNum === "1") continue;
      firstNotZeroNum = idxStrNum;
      break;
    }
  }

  let strMinNum = "";
  let minNum = 0;
  if (firstNotZeroNum) {
    if (!isFirstDigitOne) strMinNum = strNum.replaceAll(firstNotZeroNum, "1");
    else strMinNum = strNum.replaceAll(firstNotZeroNum, "0");
    minNum = parseInt(strMinNum);
  } else {
    minNum = num;
  }

  return maxNum - minNum;
}
