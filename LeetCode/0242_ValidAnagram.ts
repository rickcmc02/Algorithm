/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let isAnagram = true;
  const sDict = {};
  for (const sLetter of s) {
    const matchedCount = sDict[sLetter];
    if (matchedCount) sDict[sLetter] = matchedCount + 1;
    else sDict[sLetter] = 1;
  }

  for (const tLetter of t) {
    const matchedCount = sDict[tLetter];
    if (matchedCount) {
      if (matchedCount === 1) delete sDict[tLetter];
      else sDict[tLetter] = matchedCount - 1;
    } else {
      isAnagram = false;
      break;
    }
  }

  return isAnagram;
}
