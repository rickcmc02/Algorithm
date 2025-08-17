/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

 

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
 

Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.
*/

// answer 2
function mergeAlternately(word1: string, word2: string): string {
    const [w1Len, w2Len] = [word1.length, word2.length];
    let idx = 0;
    let [w1, w2]: [string, string] = [word1[idx], word2[idx]];
    let merged = "";

    while (w1 && w2) {
        merged += (w1 + w2);
        idx++;

        if (idx < w1Len) {
            w1 = word1[idx];

            if (idx < w2Len) {
                w2 = word2[idx];
            } else {
                w2 = "";
                merged += word1.slice(idx);
            }
        } else {
            if (idx < w2Len) {
                w1 = "";
                merged += word2.slice(idx);
            } else {
                w1 = "";
                w2 = "";
            }
        }
    }

    return merged;
};

// answer 1
/*
function mergeAlternately(word1: string, word2: string): string {
  let answer = "";

  for (let i = 0; i <= 100; i++) {
    const [letter1, letter2] = [word1[i], word2[i]];

    if (letter1) {
      if (letter2) {
        answer += letter1;
        answer += letter2;
      } else {
        answer += word1.slice(i);
        break;
      }
    } else {
      answer += word2.slice(i);
      break;
    }
  }

  return answer;
}
*/