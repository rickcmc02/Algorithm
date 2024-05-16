/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
 

Constraints:

1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.
*/

function wordPattern(pattern: string, s: string): boolean {
  const sList = s.split(" ");
  if (pattern.length !== sList.length) return false;
  const pmm: Map<string, string> = new Map();
  const smm: Map<string, string> = new Map();
  let isMatched = true;
  for (let i = 0; i < pattern.length; i++) {
    const pLetter = pattern[i];
    const sLetter = sList[i];

    if (pmm.has(pLetter)) {
      if (pmm.get(pLetter) !== sLetter) {
        isMatched = false;
        break;
      }
    } else {
      pmm.set(pLetter, sLetter);
    }

    if (smm.has(sLetter)) {
      if (smm.get(sLetter) !== pLetter) {
        isMatched = false;
        break;
      }
    } else {
      smm.set(sLetter, pLetter);
    }
  }

  return isMatched;
}
