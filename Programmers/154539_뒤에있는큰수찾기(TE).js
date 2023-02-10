/*
문제 설명
정수로 이루어진 배열 numbers가 있습니다. 배열 의 각 원소들에 대해 자신보다 뒤에 있는 숫자 중에서 자신보다 크면서 가장 가까이 있는 수를 뒷 큰수라고 합니다.
정수 배열 numbers가 매개변수로 주어질 때, 모든 원소에 대한 뒷 큰수들을 차례로 담은 배열을 return 하도록 solution 함수를 완성해주세요. 단, 뒷 큰수가 존재하지 않는 원소는 -1을 담습니다.

제한사항
4 ≤ numbers의 길이 ≤ 1,000,000
1 ≤ numbers[i] ≤ 1,000,000
입출력 예
numbers	result
[2, 3, 3, 5]	[3, 5, 5, -1]
[9, 1, 5, 3, 6, 2]	[-1, 5, 6, 6, -1, -1]
입출력 예 설명
입출력 예 #1
2의 뒷 큰수는 3입니다. 첫 번째 3의 뒷 큰수는 5입니다. 두 번째 3 또한 마찬가지입니다. 5는 뒷 큰수가 없으므로 -1입니다. 위 수들을 차례대로 배열에 담으면 [3, 5, 5, -1]이 됩니다.

입출력 예 #2
9는 뒷 큰수가 없으므로 -1입니다. 1의 뒷 큰수는 5이며, 5와 3의 뒷 큰수는 6입니다. 6과 2는 뒷 큰수가 없으므로 -1입니다. 위 수들을 차례대로 배열에 담으면 [-1, 5, 6, 6, -1, -1]이 됩니다.
*/

function solution(numbers) {
  let resNums = [];
  const numsLen = numbers.length;
  let ascNums = [...numbers];
  ascNums = ascNums.sort((a, b) => {
    return a - b;
  });

  for (let n = 0; n < numsLen; n++) {
    let currNum = numbers[n];
    // 남은 값 중 최대값을 지나칠 때마다 -1 입력
    let ascLen = ascNums.length;
    if (ascLen && currNum === ascNums[ascLen - 1]) {
      resNums.push(-1);
      ascNums.pop();
      continue;
    }

    let nextIdx = n + 1;
    while (nextIdx < numsLen) {
      let nextNum = numbers[nextIdx];
      if (nextNum > currNum) {
        resNums.push(nextNum);
        break;
      }
      nextIdx++;
    }
    if (nextIdx === numsLen) resNums.push(-1);
  }

  return resNums;
}
