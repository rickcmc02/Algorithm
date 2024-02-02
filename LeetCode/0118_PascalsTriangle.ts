/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 

Constraints:

1 <= numRows <= 30
*/

const pasTriangle = [[1]];

function generate(numRows: number): number[][] {
  const triangleLen = pasTriangle.length;
  if (numRows > triangleLen) {
    let count = triangleLen;
    while (count < numRows) {
      const lastRow = pasTriangle[count - 1];
      const tmpArr = [1];
      for (let i = 1; i < count; i++) {
        tmpArr.push(lastRow[i - 1] + lastRow[i]);
      }
      tmpArr.push(1);
      pasTriangle.push(tmpArr);
      count++;
    }
    return pasTriangle;
  } else if (numRows === triangleLen) return pasTriangle;
  else return pasTriangle.slice(0, numRows);
}
