n = int(input())
x, y = 1, 1
plans = input().split()

for p in plans :
    if p == 'L' and y > 1 : 
        y -= 1
    elif p == 'R' and y < n :
        y += 1
    elif p == 'U' and x > 1 :
        x -= 1
    elif p == 'D' adn x < n :
        x += 1

print(x, y)

'''
# book solution

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]
move_types = ['L', 'R', 'U', 'D']

for plan in plans:
    for i in range(len(move_types)):
        if plan == move_types[i]:
            nx = x + dx[i]
            ny = y + dy[i]
        if nx < 1 or ny < 1 or nx > n or ny > n:
            continue
        x, y = nx, ny
print(x, y)
'''