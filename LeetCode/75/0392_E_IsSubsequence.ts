/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 

Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
 

Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
*/

// answer 2

function isSubsequence(s: string, t: string): boolean {
    if (!s) return true; // s가 빈 스트링이면 성립
    if (!t) return false; // s가 있는데 t가 빈 스트링이면 불성립

    let sIdx = 0;

    for (let i = 0; i < t.length; i++) {
        if (s[sIdx] === t[i]) sIdx++; // s 같은 값 t에서 발견하면 한칸 이동
        if (sIdx === s.length) return true; // s 순회 완료
    }

    return false;
};

// answer 1
/*
function isSubsequence(s: string, t: string): boolean {
  let idxS = 0;
  if (!s) return true; // s가 빈 문자열인 경우
  if (s === t) return true;

  for (let i = 0; i < t.length; i++) {
      const charT = t[i];
      if (charT === s[idxS]) idxS++;
      if (idxS === s.length) return true; // s를 모두 순회했을 경우
  }

  return false;
};
*/