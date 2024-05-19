/*
Given a string s, return the longest 
palindromic
 
substring
 in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/

function longestPalindrome(s: string): string {
  let longestStr = "";
  const lastIdx = s.length - 1;

  function addStr(str: string, startIdx: number, endIdx: number): string {
    if (startIdx < 0 || endIdx > lastIdx) return str;
    const prevStr = s[startIdx];
    const nextStr = s[endIdx];
    if (prevStr === nextStr)
      return addStr(prevStr + str + nextStr, startIdx - 1, endIdx + 1);
    else return str;
  }

  for (let i = 0; i < s.length; i++) {
    const evenStr = addStr("", i - 1, i);
    const oddStr = addStr(s[i], i - 1, i + 1);
    const longStr = evenStr.length > oddStr.length ? evenStr : oddStr;
    if (longStr.length > longestStr.length) longestStr = longStr;
  }

  return longestStr;
}
