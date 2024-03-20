/*
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

*/

function lengthOfLongestSubstring(s: string): number {
  const uniqueMap = new Map<string, number>();
  const indexMap = new Map<number, string>();
  let maxLen = 0;
  for (let idx = 0; idx < s.length; idx++) {
    const letter = s[idx];
    if (uniqueMap.has(letter)) {
      const letterIdx = uniqueMap.get(letter)!;
      for (let i = letterIdx; i >= 0; i--) {
        if (!indexMap.has(i)) break;
        const idxLetter = indexMap.get(i)!;
        indexMap.delete(i);
        uniqueMap.delete(idxLetter);
      }
    }
    uniqueMap.set(letter, idx);
    indexMap.set(idx, letter);
    if (uniqueMap.size > maxLen) maxLen = uniqueMap.size;
  }

  return maxLen;
}
