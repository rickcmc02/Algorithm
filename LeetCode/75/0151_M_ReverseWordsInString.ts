/*
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 

Constraints:

1 <= s.length <= 104
s contains English letters (upper-case and lower-case), digits, and spaces ' '.
There is at least one word in s.
*/

// answer 2

function reverseWords(s: string): string {
    const splited = s.split(" ");
    const words: string[] = [];
    let answer = "";

    for (const sp of splited) {
        if (sp) words.push(sp);
    }

    const wordLen = words.length;
    for (let i = wordLen - 1; i >= 0; i--) {
        const word = words[i];
        if (answer) answer += " " + word;
        else answer = word;
    }

    return answer;
};

// answer 1
/*
function reverseWords(s: string): string {
  const wordList = s.trim().split(" ");
  const wListLen = wordList.length;
  let answer = "";

  for (let i = 0; i < wListLen; i++) {
    const word = wordList[wListLen - 1 - i];
    if (word) {
      if (answer) answer += " ";
      answer += word;
    }
  }

  return answer;
}
*/