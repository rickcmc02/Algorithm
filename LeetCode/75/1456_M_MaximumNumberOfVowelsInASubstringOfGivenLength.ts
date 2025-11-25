/*
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.
Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
 

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
1 <= k <= s.length
*/

// answer 2


// answer 1
/*
const VOWEL_SET = new Set(["a", "e", "i", "o", "u"]);

function maxVowels(s: string, k: number): number {
    const vowelList: (0 | 1)[] = [];
    
    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        if (VOWEL_SET.has(charS)) vowelList.push(1);
        else vowelList.push(0);
    }

    let sum = vowelList.slice(0, k).reduce((a: number, c: 0 | 1): number => a + c, 0);
    let maxSum = sum;

    for (let i = k; i < vowelList.length; i++) {
        sum += vowelList[i] - vowelList[i - k];
        if (sum > maxSum) maxSum = sum;
    }

    return maxSum;
};
*/