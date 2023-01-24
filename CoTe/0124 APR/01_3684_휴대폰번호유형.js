function solution(phone_number) {
  let splitedPN = phone_number.split("-");
  let spnLen = splitedPN.length;
  let pnLen = phone_number.length;

  if (spnLen === 1) {
    let pnStr = splitedPN[0];
    if (
      pnStr.substr(0, 3) === "010" &&
      pnLen === 11 &&
      pnStr.indexOf("+") === -1
    )
      return 2;
  } else if (spnLen === 3) {
    let [firstNum, secondNum, thirdNum] = splitedPN;
    if (firstNum === "010" && secondNum.length === 4 && thirdNum.length === 4) {
      if (secondNum.indexOf("+") === -1 && thirdNum.indexOf("+") === -1)
        return 1;
    }
  } else if (spnLen === 4) {
    let [firstNum, secondNum, thirdNum, fourthNum] = splitedPN;
    if (
      firstNum === "+82" &&
      secondNum === "10" &&
      thirdNum.length === 4 &&
      fourthNum.length === 4
    ) {
      if (thirdNum.indexOf("+") === -1 && fourthNum.indexOf("+") === -1)
        return 3;
    }
  }

  return -1;
}
