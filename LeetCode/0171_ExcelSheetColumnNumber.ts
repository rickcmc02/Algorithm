/*
Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:

Input: columnTitle = "A"
Output: 1
Example 2:

Input: columnTitle = "AB"
Output: 28
Example 3:

Input: columnTitle = "ZY"
Output: 701
 

Constraints:

1 <= columnTitle.length <= 7
columnTitle consists only of uppercase English letters.
columnTitle is in the range ["A", "FXSHRXW"].
*/

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphaNum = {};
for (let i = 0; i < alphabets.length; i++) {
  alphaNum[alphabets[i]] = i + 1;
}

function titleToNumber(columnTitle: string): number {
  let colNum = 0;
  for (let c = 0; c < columnTitle.length; c++) {
    const alp = columnTitle[columnTitle.length - (c + 1)];
    colNum += alphaNum[alp] * 26 ** c;
  }
  return colNum;
}
