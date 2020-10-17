# dfs

dy = [-1, 0, 1, 0]
dx = [0, -1, 0, 1]

def loc_control():
map_lst = [[0] * N for _ in range(N)]
visited = [[0] * N for _ in range(N)]

def dfs(y, x, cnt):
    map_lst[y][x] = cnt
    visited_lst[y][x] = 1
    for i in range(4) :
        ny = y + dy[i]
        nx = x + dx[i]
        if ny >= 0 and ny < 5 and nx >= 0 and nx < 5 and not visited_lst[ny][nx] :
            dfs(ny, nx, cnt+1)


def dfsAll():
    for i in range(N) :
        for j in range(N) :
            if not visited_lst[i][j] :
                dfs(i, j, 1)

    
