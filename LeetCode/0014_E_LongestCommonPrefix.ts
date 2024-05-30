/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

function longestCommonPrefix(strs: string[]): string {
  let shortestStr = "";
  let shortestStrLen = 200;

  for (const str of strs) {
    const strLen = str.length;
    if (strLen < shortestStrLen) {
      shortestStr = str;
      shortestStrLen = strLen;
    }
  }

  let commonStr = shortestStr;
  for (const str of strs) {
    if (!commonStr) break;
    let sliceLen = commonStr.length;
    for (let i = 0; i < commonStr.length; i++) {
      if (commonStr[i] !== str[i]) {
        sliceLen = i;
        break;
      }
    }
    commonStr = commonStr.slice(0, sliceLen);
  }

  return commonStr;
}
