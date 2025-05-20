/*
There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.

Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi.

This year, there will be a big event in the capital (city 0), and many people want to travel to this city.

Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.

It's guaranteed that each city can reach city 0 after reorder.

 

Example 1:


Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
Output: 3
Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).
Example 2:


Input: n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]
Output: 2
Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).
Example 3:

Input: n = 3, connections = [[1,0],[2,0]]
Output: 0
 

Constraints:

2 <= n <= 5 * 104
connections.length == n - 1
connections[i].length == 2
0 <= ai, bi <= n - 1
ai != bi

*/

// gpt의 도움을 받음

function minReorder(n: number, connections: number[][]): number {
  const graph = new Map<number, number[]>(); // 양방향 연결
  const directed = new Map<number, Set<number>>(); // 원래 방향 저장

  for (let i = 0; i < n; i++) {
      graph.set(i, []);
      directed.set(i, new Set());
  }

  for (const [from, to] of connections) {
      graph.get(from)!.push(to);
      graph.get(to)!.push(from);
      directed.get(from)!.add(to);
  }

  const visited = new Array(n).fill(false);
  let changed = 0;

  const dfs = (node) => {
      visited[node] = true;

      const neighbors = graph.get(node)!;
      for (const neighbor of neighbors) {
          if (!visited[neighbor]) {
              if (directed.get(node)!.has(neighbor)) {
                  changed++;
              }

              dfs(neighbor);
          }
      }
  }

  dfs(0);

  return changed;
};