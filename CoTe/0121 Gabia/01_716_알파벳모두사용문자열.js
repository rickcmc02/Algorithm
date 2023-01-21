function solution(sentence) {
  let unused = "";
  let sntnc = sentence.replaceAll(" ", "").toLowerCase();
  let visited = {};
  let visitedNum = 0;
  let alphabets = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < 26; i++) {
    let alphabet = alphabets[i];
    visited[alphabet] = false;
  }

  for (let j = 0; j < sntnc.length; j++) {
    let letter = sntnc[j];
    if (visitedNum === 26) break;

    if (visited[letter]) continue;
    else if (visited[letter] === false) {
      // 특수문자 때문에 false 검증
      visited[letter] = true;
      visitedNum++;
    }
  }

  if (visitedNum === 26) unused = "perfect";
  else {
    Object.keys(visited).forEach((alphabet) => {
      if (visited[alphabet] === false) unused += alphabet;
    });
  }

  return unused;
}
