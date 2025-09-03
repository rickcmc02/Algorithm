/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:

Input: s = "leetcode"

Output: "leotcede"

 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/

const VOWELS = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// answer 2

function reverseVowels(s: string): string {
  const sList = s.split("");
  const idxVowelData: { [key: number]: string } = {};

  for (let i = 0; i < sList.length; i++) {
    const char = sList[i];
    
    if (VOWELS.includes(char)) idxVowelData[i] = char;
  }

  return "";
}

// answer 1
/*
function reverseVowels(s: string): string {
  const vowelPosition: number[] = [];
  const vowelList: string[] = [];
  const sSplit = s.split("");

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (VOWELS.includes(letter)) {
      vowelPosition.push(i);
      vowelList.push(letter);
    }
  }

  for (let i = 0; i < vowelPosition.length; i++) {
    const vPos = vowelPosition[i];
    sSplit[vPos] = vowelList[vowelList.length - 1 - i];
  }

  return sSplit.join("");
}
*/
