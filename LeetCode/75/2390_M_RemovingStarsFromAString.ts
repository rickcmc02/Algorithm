/*
You are given a string s, which contains stars *.

In one operation, you can:

Choose a star in s.
Remove the closest non-star character to its left, as well as remove the star itself.
Return the string after all stars have been removed.

Note:

The input will be generated such that the operation is always possible.
It can be shown that the resulting string will always be unique.
 

Example 1:

Input: s = "leet**cod*e"
Output: "lecoe"
Explanation: Performing the removals from left to right:
- The closest character to the 1st star is 't' in "leet**cod*e". s becomes "lee*cod*e".
- The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod*e".
- The closest character to the 3rd star is 'd' in "lecod*e". s becomes "lecoe".
There are no more stars, so we return "lecoe".
Example 2:

Input: s = "erase*****"
Output: ""
Explanation: The entire string is removed, so we return an empty string.
 

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters and stars *.
The operation above can be performed on s.

*/

// Second trial

function removeStars2(s: string): string {
  const charStack: string[] = [];

  for (const char of s) {
      if (char === "*") charStack.pop();
      else charStack.push(char);
  }

  return charStack.join("");
};


// First trial

function removeStars1(s: string): string {
  let starPoint = 0; // 왼쪽 문자 지울 갯수, * 만날 때마다 증가
  let eraseIdxList: number[] = []; // 지나칠 idx 저장
  let eraseIdxPointer = 0; // 지나칠 idx 확인 최신화
  let removedStr = "";

  for (let i = s.length - 1; i >= 0; i--) {
      const char = s[i];
      if (char === "*") {
          eraseIdxList.push(i);
          starPoint++; // 왼쪽 문자 지울 포인트++
      } else {
          if (starPoint) {
              eraseIdxList.push(i);
              starPoint--; // 지울 idx 저장하고 포인트--
          }
      }
  }

  const eraseListLen = eraseIdxList.length;
  if (!eraseListLen) return s; // 지울 문자가 없으면 원본 반환
  eraseIdxPointer = eraseListLen - 1; // 지울 문자 index 역순으로 저장되어 있으므로 맨 뒤 값부터 시작
  let currPassIdx = eraseIdxList[eraseIdxPointer];

  for (let i = 0; i < s.length; i++) {
      if (i === currPassIdx) {
          eraseIdxPointer--;
          currPassIdx = eraseIdxList[eraseIdxPointer];
          continue;
      }

      removedStr += s[i];
  }

  return removedStr;
};