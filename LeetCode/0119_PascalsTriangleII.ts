/*
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1]
 

Constraints:

0 <= rowIndex <= 33
 

Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?
*/

const pasTriangle2 = [[1]];

function getRow(rowIndex: number): number[] {
  const pasLenMinusOne = pasTriangle2.length - 1;
  if (pasLenMinusOne >= rowIndex) return pasTriangle2[rowIndex];
  else {
    let count = pasLenMinusOne;
    while (count < rowIndex) {
      const lastLine = pasTriangle2[count];
      const tmpArr = [1];
      for (let i = 1; i < count + 1; i++) {
        tmpArr.push(lastLine[i - 1] + lastLine[i]);
      }
      tmpArr.push(1);
      pasTriangle2.push(tmpArr);
      count++;
    }
    return pasTriangle2[rowIndex];
  }
}
