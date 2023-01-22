function solution(n, v) {
  // 최소 마진 구하기
  let minMargin = 0;
  let totalMinPrice = v[0];
  let totalMaxPrice = 0;
  for (let j = 0; j < v.length; j++) {
    let price = v[j];
    if (price < totalMinPrice) totalMinPrice = price;
    if (price > totalMaxPrice) totalMaxPrice = price;
  }
  minMargin = totalMinPrice - totalMaxPrice;

  // 문제 풀이부
  let maxMargin = minMargin;
  let maxPrice = v[0];

  for (let i = 1; i < v.length; i++) {
    let price = v[i];
    if (maxPrice - price > maxMargin) maxMargin = maxPrice - price;
    if (price > maxPrice) maxPrice = price;
  }

  return maxMargin;
}
