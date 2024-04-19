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
  const matchedDict: { [key in string]: string } = {};
  let isMatched = true;
  for (let i = 0; i < pattern.length; i++) {
    const pLetter = pattern[i];
    const matchedLetter = matchedDict[pLetter];
    if (matchedLetter) {
      if (matchedLetter !== sList[i]) {
        isMatched = false;
        break;
      }
    } else {
      matchedDict[pLetter] = sList[i];
    }
  }

  return isMatched;
}
