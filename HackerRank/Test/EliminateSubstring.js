function getFinalString(s) {
  // 대문자 영어 글자
  // AWS 지우기 반복
  // 아무 String도 안 남으면 -1;

  let sWord = s;
  let isPossible = true;

  while (isPossible) {
    if (!sWord) return -1;
    let splitedS = sWord.split("AWS");
    if (splitedS.length === 1) isPossible = false;
    let renderedS = "";
    splitedS.forEach((spliS) => {
      renderedS += spliS;
    });
    sWord = renderedS;
  }

  return sWord;
}
