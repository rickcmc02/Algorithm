/*
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]
 

Constraints:

1 <= temperatures.length <= 105
30 <= temperatures[i] <= 100
*/

function dailyTemperatures(temperatures: number[]): number[] {
    const tempsLen = temperatures.length;
    const answer = new Array(tempsLen).fill(0);
    const stack: [number, number][] = [[temperatures[0], 0]]; // [온도, 인덱스][]

    for (let i = 1; i < tempsLen; i++) {
        const temp = temperatures[i];

        let stackLen = stack.length;
        let topStack = stackLen ? stack[stackLen - 1] : null;
        if (topStack) { // stack 최상단부터 온도비교 하면서 깎기
            while (topStack && topStack[0] < temp) {
                answer[topStack[1]] = i - topStack[1];
                stack.pop();
                stackLen -= 1;
                if (stackLen) topStack = stack[stackLen - 1];
                else topStack = null;
            }
        }

        stack.push([temp, i]);
    }

    return answer;
};