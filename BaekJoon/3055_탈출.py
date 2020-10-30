from collections import deque

r, c = map(int, input().split(' '))
rmap = [list(input()) for _ in range(r)]
trace = [[0] * c for _ in range(r)]

dy = [-1, 0, 1, 0]
dx = [0, -1, 0, 1]
dq_hedge_1 = deque()
dq_hedge_2 = deque()
dq_water_1 = deque()
dq_water_2 = deque()

nCall = 0

for i in range(r) :
    for j in range(c) :
        if rmap[i][j] != '.' :
            if rmap[i][j] == 'S' :
                rmap[i][j] = 0
                dq_hedge_1.append([i, j])
            elif rmap[i][j] == '*' :
                dq_water_1.append([i, j])

def water(y, x):
    for i in range(4) :
        ny = y + dy[i]
        nx = x + dx[i]
        if 0 <= ny < r and 0 <= nx < c :
            nxy = rmap[ny][nx]
            if nxy == '.' :
                rmap[ny][nx] = '*'
                if nCall % 2 == 0 :
                    dq_water_1.append([ny, nx])
                else : dq_water_2.append([ny, nx]) 

def hedgehog(y, x):
    for i in range(4) :
        ny = y + dy[i]
        nx = x + dx[i]
        if 0 <= ny < r and 0 <= nx < c :
            nxy = rmap[ny][nx]
            if nxy == 'D' :
                return rmap[y][x] + 1
            if nxy == '.' :
                rmap[ny][nx] = rmap[y][x] + 1
                if nCall % 2 == 0 :
                    dq_hedge_1.append([ny, nx])
                else : dq_hedge_2.append([ny, nx])

while True :
    nCall += 1
    if nCall % 2 == 1 :
        dq_w = dq_water_1
        dq_h = dq_hedge_1
    else :
        dq_w = dq_water_2
        dq_h = dq_hedge_2

    if not dq_hedge_1 and not dq_hedge_2 :
        print('KAKTUS')
        break

    while dq_w :
        [w_y, w_x] = dq_w.popleft()
        water(w_y, w_x)

    while dq_h :
        [h_y, h_x] = dq_h.popleft()
        ans = hedgehog(h_y, h_x)
        if ans :
            print(ans)
            break
    if ans :
        break