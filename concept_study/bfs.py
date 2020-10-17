# bfs
from collections import deque

dy = [-1, 0, 1, 0]
dx = [0, -1, 0, 1]
dq = deque()
first_dq = []
visited = [[0] * N for _ in range(N)]

def bfs(y, x):
    dq.append([y, x])
    visited[y][x] = 1
    
    while dq :
        first_dq = dq[0]
        dq.popleft()

        for i in range(4) :
            ny = first_dq[0]
            nx = first_dq[1]
            if ny >= 0 and ny < N and nx >= 0 and nx < 5 and not visited[ny][nx]
                visited[ny][nx] = 1
                dq.append([ny, nx])

for i in range(N) :
    for j in range(N) :
        if not visited[i][j] :
            bfs(i,j)