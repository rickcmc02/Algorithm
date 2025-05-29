/*
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

 

Example 1:


Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 10
grid[i][j] is 0, 1, or 2.

*/

const DIRECTIONS = [[0, 1], [1, 0], [0, -1], [-1, 0]];

function orangesRotting(grid: number[][]): number {
    const [m, n] = [grid.length, grid[0].length]; // m: y방향, n: x방향
    const visited = Array.from({ length: m }, () => new Array(n).fill(false));
    const queue: [number, number, number][] = []; // [y, x, minute]
    let minute = 0;
    let numFresh = 0;

    const checkFresh = (y, x) => y >= 0 && y < m && x >= 0 && x < n && grid[y][x] === 1;

    for (let y = 0; y < m; y++) {
        for (let x = 0; x < n; x++) {
            if (grid[y][x] === 2) {
                queue.push([y, x, 0]);
                visited[y][x] = true;
            }

            if (grid[y][x] === 1) {
                numFresh++;
            }
        }
    }

    while (queue.length) {
        const [y, x, min] = queue.shift()!;
        if (min > minute) minute = min;

        for (const [dy, dx] of DIRECTIONS) {
            const [ny, nx] = [y + dy, x + dx];
            const isOrange = checkFresh(ny, nx);
            if (isOrange) {
                queue.push([ny, nx, min + 1]);
                grid[ny][nx] = 2;
                numFresh--; // 썩을때마다 신선한 오렌지 -1
            }
        }
    }

    return numFresh ? -1 : minute; // 썩히지 못한 오렌지 있으면 -1
};