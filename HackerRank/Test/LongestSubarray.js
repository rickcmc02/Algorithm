function maxLength(a, k) {
  // Write your code here
  // k보다 합이 작은 subarray중 가장 길이가 긴 것

  let sum = 0;
  let subLen = 0;
  let answerLen = 0;
  let startIdx = 0;
  let endIdx = 0;

  for (let i = 0; i < a.length; i++) {
    // 만일 array 안의 값이 k보다 클 경우
    // sum은 0으로, start / end 인덱스 모두 i + 1로 리셋하고 넘기기
    if (a[i] > k) {
      sum = 0;
      startIdx = i + 1;
      endIdx = i + 1;
      continue;
    }
    endIdx = i;
    sum += a[endIdx];
    subLen++;
    // sum이 k보다 같거나 작아질 때까지 start 인덱스 값 빼기;
    while (sum > k && subLen) {
      sum -= a[startIdx];
      subLen--;
      startIdx += 1;
    }
    if (subLen > answerLen) answerLen = subLen;
  }

  return answerLen;
}
