/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
 

Constraints:

1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length
*/

// answer 2
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    const bedLen = flowerbed.length;
    const newbed = new Array(bedLen).fill(0);
    let numPlantable = 0;

    for (let i = 0; i < bedLen; i++) {
        const fb = flowerbed[i];
        const nb = newbed[i];
        const nbp = i ? newbed[i - 1] : 0; // new bed prev
        const fbn = i === bedLen - 1 ? 0 : flowerbed[i + 1] // flower bed next

        if (fb) newbed[i] = fb; // 심어 있던 곳은 그대로 심기
        else if (!(nbp || fbn)) {
            newbed[i] = 1; // 새 플랜드 앞, 기존 플랜트 뒤 값이 비어있다면 심을 수 있음
            numPlantable++;
        }
    }

    return numPlantable >= n;
};

// answer 1
/*
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let prevSpot = 0;
  let nextSpot = 0;
  flowerbed.push(0);
  let numPlanted = 0;

  for (let i = 0; i < flowerbed.length - 1; i++) {
    if (i) prevSpot = flowerbed[i - 1];
    nextSpot = flowerbed[i + 1];
    if (!(prevSpot || nextSpot || flowerbed[i])) {
      flowerbed[i] = 1;
      numPlanted++;
    }
    if (numPlanted >= n) return true;
  }

  return false;
}
*/