/*
Given 3 positives numbers a, b and c. Return the minimum flips required in some bits of a and b to make ( a OR b == c ). (bitwise OR operation).
Flip operation consists of change any single bit 1 to 0 or change the bit 0 to 1 in their binary representation.

 

Example 1:



Input: a = 2, b = 6, c = 5
Output: 3
Explanation: After flips a = 1 , b = 4 , c = 5 such that (a OR b == c)
Example 2:

Input: a = 4, b = 2, c = 7
Output: 1
Example 3:

Input: a = 1, b = 2, c = 3
Output: 0
 

Constraints:

1 <= a <= 10^9
1 <= b <= 10^9
1 <= c <= 10^9
*/


function minFlips(a: number, b: number, c: number): number {
    const [aBin, bBin, cBin] = [a.toString(2), b.toString(2), c.toString(2)];
    const [aLen, bLen, cLen] = [aBin.length, bBin.length, cBin.length];
    const longest = Math.max(aLen, bLen, cLen);
    let cnt = 0;

    for (let i = 1; i <= longest; i++) {
        const [aIdx, bIdx, cIdx] = [aLen - i, bLen - i, cLen - i];
        const [isA, isB, isC] = [aIdx >= 0, bIdx >= 0, cIdx >= 0];
        const aOne = isA && aBin[aIdx] === "1";
        const bOne = isB && bBin[bIdx] === "1";

        if (isC) {
            const curr = cBin[cIdx];
            if (curr === "1") {
                // 둘 다 없는 경우
                if (!aOne && !bOne) cnt++;
            } else {
                if (aOne) cnt++;
                if (bOne) cnt++;
            }
        } else { // c보다 더 큰자리수에 a 또는 b의 값 존재
            if (aOne) cnt++;
            if (bOne) cnt++;
        }
    }

    return cnt;
};