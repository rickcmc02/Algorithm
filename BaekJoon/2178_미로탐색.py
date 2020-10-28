'''
N×M크기의 배열로 표현되는 미로가 있다.

1	0	1	1	1	1
1	0	1	0	1	0
1	0	1	0	1	1
1	1	1	0	1	1
미로에서 1은 이동할 수 있는 칸을 나타내고, 0은 이동할 수 없는 칸을 나타낸다. 이러한 미로가 주어졌을 때, (1, 1)에서 출발하여 (N, M)의 위치로 이동할 때 지나야 하는 최소의 칸 수를 구하는 프로그램을 작성하시오. 한 칸에서 다른 칸으로 이동할 때, 서로 인접한 칸으로만 이동할 수 있다.

위의 예에서는 15칸을 지나야 (N, M)의 위치로 이동할 수 있다. 칸을 셀 때에는 시작 위치와 도착 위치도 포함한다.

입력
첫째 줄에 두 정수 N, M(2 ≤ N, M ≤ 100)이 주어진다. 다음 N개의 줄에는 M개의 정수로 미로가 주어진다. 각각의 수들은 붙어서 입력으로 주어진다.

출력
첫째 줄에 지나야 하는 최소의 칸 수를 출력한다. 항상 도착위치로 이동할 수 있는 경우만 입력으로 주어진다.
'''

# bfs
from collections import deque

v, h = list(map(int, input().split(' ')))

maze = []
for _ in range(v) :
    maze.append(list(map(int, str(input()))))
visited = [[0] * h for _ in range(v)]

dy = [-1, 0, 1, 0]
dx = [0, -1, 0, 1]
dq = deque()
first_dq = []

def bfs(y, x):
    dq.append([y, x])
    visited[y][x] = 1
    
    while dq :
        first_dq = dq.popleft()

        for i in range(4) :
            ny = first_dq[0] + dy[i]
            nx = first_dq[1] + dx[i]
            if ny in range(0,v) and nx in range(0,h) and maze[ny][nx] != 0 and not visited[ny][nx] :
                maze[ny][nx] = maze[first_dq[0]][first_dq[1]] + 1
                visited[ny][nx] = 1
                dq.append([ny, nx])

for i in range(v) :
    for j in range(h) :
        if not visited[i][j] :
            bfs(i,j)

print(maze[v-1][h-1])