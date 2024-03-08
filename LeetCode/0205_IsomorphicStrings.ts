/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
*/

function isIsomorphic(s: string, t: string): boolean {
  let isIsomorphic = true;
  const sDict = {};
  const tDict = {};
  const strLen = s.length;
  for (let i = 0; i < strLen; i++) {
    const matchedT = sDict[s[i]];
    const matchedS = tDict[t[i]];
    if (matchedT && matchedS) {
      if (matchedT === t[i] && matchedS === s[i]) continue;
      else {
        isIsomorphic = false;
        break;
      }
    } else {
      if (matchedT || matchedS) {
        isIsomorphic = false;
        break;
      } else {
        sDict[s[i]] = t[i];
        tDict[t[i]] = s[i];
      }
    }
  }

  return isIsomorphic;
}
