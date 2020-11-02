# 높이 for문으로 돌리고 그 안에서 bfs 함수 호출해서 돌리기

# dfs
from collections import deque

N = int(input())
alti_list = [list(map(int, list(input().split(' ')))) for _ in range(N)]

dy = [-1, 0, 1, 0]
dx = [0, -1, 0, 1]
max_alti = 0
group_list = []

def underwater(s):
    for i in range(N) :
        for j in range(N) :
            if alti_list[i][j] <= s :
                alti_list[i][j] = 0

def dfsAll():
    global group_num
    for i in range(N) :
        for j in range(N) :
            if alti_list[i][j] and not visited[i][j] :
                group_num += 1
                dfs(i,j)

def dfs(y, x):
    visited[y][x] = 1
    for i in range(4) :
        ny = y + dy[i]
        nx = x + dx[i]
        if ny >= 0 and ny < N and nx >= 0 and nx < N and not visited[ny][nx] :
            dfs(ny, nx)

for i in range(N) :
    for j in range(N) :
        if alti_list[i][j] > max_alti :
            max_alti = alti_list[i][j]

for w_lev in range(max_alti) :
    group_num = 0
    visited = [[0] * N for _ in range(N)]
    underwater(w_lev)
    dfsAll()
    group_list.append(group_num)

print(group_list)
print(max(group_list))
